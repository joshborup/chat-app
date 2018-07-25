const express = require('express');
const userRouter = express.Router();
const cloudinary = require('cloudinary');
const axios = require('axios');

userRouter.post('/login', (req, res) => {
    axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${req.body.access_token}`).then(userInfoResponse => {
        const db = req.app.get('db');

        const {sub, nickname, picture, email, email_verified} = userInfoResponse.data

        db.authenticate_user(sub).then(response => {
            if(!response.length){
                const defaultImage = 'https://res.cloudinary.com/devmountain/image/upload/v1530722439/default.svg';
                db.create_user([sub, nickname, picture, email, email_verified, defaultImage]).then(user => {
                    req.session.user = user
                    db.create_profile(user[0].id).then((response)=> {
                       console.log(response);
                    })
                    res.status(200).send('Success')
                })
            }else {
                req.session.user = response;
                res.status(200).send('Success')
            }
        })

        
    }).catch(err => console.log(err))
   
})

userRouter.get('/user_data', (req, res) => {
    res.status(200).json(req.session.user);
})

userRouter.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send('logged out');
})

userRouter.post('/update_profile', (req, res) => {
    const db = req.app.get('db');
    let { update } = req.body;
    console.log(req.session.user[0].id)
    db.update_profile([
        update.aboutMe,
        update.facebook,
        update.instagram,
        update.linkedin,
        req.session.user[0].id
    ]).then(response => {
        console.log(response);
        res.status(200).json(response);
    }).catch(err => console.log('err :', err))
})

userRouter.get('/profile_data', (req, res) => {
    const db = req.app.get('db');

    db.get_profile_data(req.session.user[0].id).then(response => {
        res.status(200).json(response);
    })
})

userRouter.post('/edit_profile_background', (req, res) => {
    const db = req.app.get('db');
    let { profileBackground } = req.body;
    console.log('profileBackground :', profileBackground);
    console.log('req.session.user[0].id :', req.session.user[0].id);

    db.update_background([profileBackground, req.session.user[0].id]).then(response => {
        req.session.user[0].profile_background = response[0].profile_background
        console.log('=================fdsfg,',req.session.user[0].profile_background)
        res.status(200).json(response[0])
    }).catch(err => console.log(err))
})


userRouter.get('/user_profile/:id', (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_profile_by_id(id).then(user => {
        res.status(200).json(user);
    })
})

userRouter.get('/upload', (req, res) => {

    // get a timestamp in seconds which is UNIX format
        const timestamp = Math.round((new Date()).getTime() / 1000);
    
    // cloudinary API secret stored in the .env file
        const api_secret  = process.env.CLOUDINARY_SECRET_API;
    
    // user built in cloudinary api sign request function to  create hashed signature with your api secret and UNIX timestamp
        const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret);
    
    // make a signature object to send to your react app
        const payload = {
            signature: signature,
            timestamp: timestamp
        };
            res.json(payload);
    })

module.exports = userRouter;
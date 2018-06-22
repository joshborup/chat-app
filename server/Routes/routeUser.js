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
                db.create_user([sub, nickname, picture, email, email_verified]).then(user => {
                    req.session.user = user
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

userRouter.post('/edit_profile_background', (req, res) => {
    const db = req.app.get('db');
    let { profileBackground } = req.body;
    console.log(profileBackground, req.session.user[0].id);

    
    db.update_background([profileBackground, req.session.user[0].id]).then(response => {
        console.log('response :', response);
        res.send('success!')
    }).catch(err => console.log(err))
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
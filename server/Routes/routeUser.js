const express = require('express');
const userRouter = express.Router();
const axios = require('axios');



userRouter.post('/login', (req, res) => {
    console.log('hit')
    axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${req.body.access_token}`).then(userInfoResponse => {
        console.log(userInfoResponse.data)
        const db = req.app.get('db');
        

        const {sub, nickname, picture, email, email_verified} = userInfoResponse.data

        db.authenticate_user(sub).then(response => {
            if(!response.length){
                db.create_user([sub, nickname, picture, email, email_verified]).then(user => {
                    req.session.user = user
                    console.log('new_user', user)
                })
            }else {
                console.log('returning_user', response)
                req.session.user = response;
            }
        })


        // db.create_user([sub, nickname, picture, email, email_verified])

        req.session.user = userInfoResponse.data
        res.redirect('/')
    }).catch(err => console.log(err))
   
})

userRouter.get('/user_data', (req, res) => {
    
    res.status(200).json(req.session.user);
})

userRouter.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send('logged out');
})

module.exports = userRouter;
const express = require('express');
const userRouter = express.Router();
const axios = require('axios');



userRouter.post('/login', (req, res) => {
    console.log('hit')
    axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${req.body.access_token}`).then(userInfoResponse => {
        console.log(userInfoResponse.data)
        req.session.user = userInfoResponse.data
        res.redirect('/')
    }).catch(err => console.log(err))
   
})

userRouter.get('/user_data', (req, res) => {
    console.log('hit');
    res.status(200).json(req.session.user);
})

module.exports = userRouter;
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('Home.html');
});

router.get('/login', (req, res) => {
    res.render('login.html');
});

router.get('/home', (req, res) => {
    res.render('Home.html');
});

router.get('/register', (req, res) => {
    res.render('login.html');
});

router.get('/otp', (req, res) => {
    res.render('verify');

});

router.get('/verify', (req, res) => {
    res.render('verify');

});

module.exports = router;
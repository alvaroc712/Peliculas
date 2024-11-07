const express = require('express');
const router = express.Router();
const datos = require('../data/dataprovider');

router.get('/', function(req, res, next) {
    const imagenes = datos.getAllData();
    res.render('index', { head_title: 'Principal', imagenes: imagenes });
});

router.get('/login', (req, res) => {
    res.render("login", { head_title: "Login" });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = datos.validateUser(email, password);

    if (user) {
        req.session.login = true;
        req.session.user = user;
        res.redirect("/");
    } else {
        res.render("login", { head_title: "Login", error: "Credenciales incorrectas" });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});


module.exports = router;

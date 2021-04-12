var con = require('./databaseHandler')
var express = require('express');
var bcrypt = require("bcrypt");
var router = express.Router();
var localStrategy = require('passport-local').Strategy;
var passport= require('passport');
var session = require("express-session");

module.exports = function (passport) {
    passport.use('local', new localStrategy({ usernameField: 'email' }, (email, password, done) => {
        con.query(`SELECT * FROM users WHERE email = '${email}'`, (err, data) => {
            if (err) throw err;
            if (!data[0]) {
                return done(null, false, { message: "User doesn't exists.", type: "warning" });
            }
            bcrypt.compare(password, data[0].password, (err, match) => {
                if (err) {
                    return done(null, false);
                    
                }
                if (!match) {
                    return done(null, false, { message: "Password doesn't match.", type: "danger"});
                    
                }
                if (match) {
                    return done(null, data);
                    
                }
            });
        });
    }));
}
passport.serializeUser(function (user, cb) {
    cb(null, user[0].id);
});

// ! NOT WORKING
passport.deserializeUser(function (id, cb) {
    con.query(`SELECT * FROM users WHERE id = '${id}'`,function(err,user){
        cb(err,user);          
    });
});


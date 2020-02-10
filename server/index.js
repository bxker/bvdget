require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const massive = require('massive')


//controllers
const {getUser, register, login, logout} = require('./controllers/authController.js');

//dotenv
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

//middleware
app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))


//db connection
massive(CONNECTION_STRING)
.then((db) => {
    app.set('db', db);
    console.log('Database Connected :D')
})


//endpoints
//----auth----
app.get('/auth/user', getUser)
app.post('/auth/register', register)
app.post('/auth/login', login)
app.post('/auth/logout', logout)


//listen
app.listen(SERVER_PORT, () => console.log(`Server Listening on Port: ${SERVER_PORT}`));
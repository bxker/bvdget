const bcrypt = require('bcryptjs');

const getUser = async (req, res) => {    
    res.status(200).json(req.session.user);
}


const register = async (req, res) => {
    console.log('hit')
    const db = req.app.get('db');
    const {username, password, email, first_name, last_name} = req.body;
    console.log(req.body)

    const foundUser = await db.auth.checkForUsername(username);

    if(foundUser[0]){
        res.status(409).json('Username Taken')
    }else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.auth.registerUser(email, username, hash, first_name, last_name);
        req.session.user = {
            email: newUser[0].email,
            user_id: newUser[0].user_id,
            first_name: newUser[0].first_name,
            last_name: newUser[0].last_name,
            username: newUser[0].username,
            profile_pic: newUser[0].profile_img
        };
        
        res.status(200).json(req.session.user);
    }

}
const login = async (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body;

    const foundUser = await db.auth.checkForUsername(username);

    if(!foundUser[0]){
        res.status(403).json('Username or Password incorrect')
    }else{
        const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash)

        if(!isAuthenticated){
            res.status(403).json('Username or Password Incorrect')
        }else {
            req.session.user = {
                email: foundUser[0].email,
                user_id: foundUser[0].user_id,
                first_name: foundUser[0].first_name,
                last_name: foundUser[0].last_name,
                username: foundUser[0].username,
                profile_pic: foundUser[0].profile_img
            }
            res.status(200).json(req.session.user);
        }
    }
}
const logout = (req, res) => {
    req.session.destroy();
    res.status(200).json('logged out successfully');
}

module.exports = {
    getUser,
    register,
    login,
    logout
}
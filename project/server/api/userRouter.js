const Router = require('express').Router;
const router = Router();
const {createToken, verify} = require('../jwt');
const db = require('../database/database');


const checkEmailUser = (email) => {
    return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM USERS WHERE email='${email}'`, function(err, rows){
                if(err){
                    reject(err);
                }
                if(rows.length > 0){
                    resolve(true);
                }else{
                    resolve(false);
                }
            });
    })
}
///const blackList = [];
router.post('/registration', (req,res) => {
    const {firstName, secondName, password, confirmedPassword, email} = req.body;
//     if(password != confirmedPassword){
//         res.status(400).send('Password and confirmed password are not the same!');
//         return;
//     }
//    const checkEmail = checkEmailUser(email);
//    if(checkEmail){
//        res.status(400).send('User with such email already exists!');
//         return;
//     }
    db.query(`INSERT INTO USERS VALUES('${firstName}', '${secondName}', '${password}', '${confirmedPassword}', '${email}')`);
    res.status(201).send('User created');
})
router.post('/login', (req,res) => {
    const {firstName, password} = req.body;

    db.query(`SELECT * FROM USERS WHERE firstName='${firstName}' AND password='${password}'`, (err, result) => {
        if(err){
            res.send({err});
        }
        if(result.length > 0){
            createToken(firstName).then(token => {
            res.cookie('auth-token', token, {httpOnly: true});
            res.status(201).send('Success login!');
            });
        }else{
            res.status(400).send('No user found!');
        }
    })
})
// router.post('/logout', (res, req) => {
//     const token = req.headers['access-token'];
//     blackList.push(token);
//     res.clearCookie('auth-token').send({token: null});
    
// })

module.exports = router;
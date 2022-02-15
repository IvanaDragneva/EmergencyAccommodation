const Router = require('express').Router;
const router = Router();
const {createToken, verify} = require('../jwt');
const db = require('../database/database');
const cookieParser = require('cookie-parser');

router.post('/registration', (req,res) => {
    const {firstName, secondName, password, confirmedPassword, email} = req.body;
    if(password !== confirmedPassword){
        res.send({message: 'Password and confirmed password are not the same!'});
        return;
    }
    db.query(`SELECT * FROM USERS WHERE email='${email}'`, function(err, rows){
        if(rows.length === 0){
            console.log(rows.length);
            db.query(`INSERT INTO USERS VALUES('${firstName}', '${secondName}', '${password}', '${confirmedPassword}', '${email}', NULL)`);
            res.status(201).send('User created');
        }else{
            res.send({message: "User with such email already exists!"});
            return;
        }
    })
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
            res.status(201).send(token);
            });
        }else{
            res.send({ message: 'Wrong username or password!'});
        }
    })
})

router.post('/logout', (req, res) => {
    res.clearCookie('auth-token').send('Cookie cleared'); 
 })

router.put('/update', (req,res) => {
    const {email, newPassword} = req.body;
    db.query(`UPDATE users SET password='${newPassword}' WHERE email='${email}'`);
    res.status(201).send('Password updated!');
})
router.post('/:comment', (req,res) => {
    const {content} = req.body;
    res.send(content);
})
module.exports = router;
const Router = require('express').Router;
const router = Router();
const {createToken, verify} = require('../jwt');

const users = [{
    id: 0,
    firstName: 'test',
    password: '1234'
}];

router.post('/registration', (req,res) => {
    const {firstName, password} = req.body;
    if(users.some(user => user.firstName === firstName)){
        res.status(400).send('User with such firstName already exists!');
        return;
    }
    users.push({firstName, password});
    res.status(201).send('User created');
})
router.post('/login', (req,res) => {
    const {firstName, password} = req.body;
    createToken(firstName).then(token => {
        res.cookie('auth-token', token, {httpOnly: true});
        res.status(201).send('Success login!');
    });
})
router.get('/', (req,res) => {
    res.json(users);
})

module.exports = router;
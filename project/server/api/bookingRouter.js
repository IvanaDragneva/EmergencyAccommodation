const Router = require('express').Router;
const bookingRouter = Router();
const db = require('../database/database');

bookingRouter.post('/tokuda', (req,res) => {
    const {firstName, email, date} = req.body;
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}')`);
    res.status(201).send('Your bed is booked successfully!');
})

module.exports = bookingRouter;
const Router = require('express').Router;
const bookingRouter = Router();
const db = require('../database/database');

 bookingRouter.put('/info', (req,res) => {
     const {id} = req.body;
     const freeBeds = db.query(`SELECT name, freeBeds, covidPatients, description from hospitals where id='${id}'`, function(err, results){
         res.send(JSON.stringify(results));
     });
 })
 bookingRouter.post('/book', (req,res) => {
     const {firstName, email, date, hospitalName} = req.body;
     db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
     res.status(201).send('Your bed is booked successfully!');
 })
 bookingRouter.put('/book', (req,res) => {
    const {id} = req.body;
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE id=${id}`);
    const freeBeds = db.query(`SELECT freeBeds from hospitals where id='${id}'`, function(err, results){
    res.send(JSON.stringify(results));
    });
})

module.exports = bookingRouter;
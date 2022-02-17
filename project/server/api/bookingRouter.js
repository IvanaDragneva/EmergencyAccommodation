const Router = require('express').Router;
const bookingRouter = Router();
const db = require('../database/database');

bookingRouter.post('/tokuda', (req,res) => {
    const {firstName, email, date} = req.body;
    const hospitalName = 'Tokuda';
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
    res.status(201).send('Your bed is booked successfully!');
})
bookingRouter.get('/tokuda', (req,res) => {
    const freeBeds = db.query(`SELECT freeBeds, covidPatients from hospitals where name='Tokuda'`, function(err, results){
        res.send(JSON.stringify(results));
    });
})
bookingRouter.put('/tokuda', (req,res) => {
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE name='Tokuda'`);
    res.send('Number of beds is updated.');
})
// bookingRouter.get('/tokuda/covidPatients', (req,res) => {
//     const covidPatients = db.query(`SELECT covidPatients from hospitals where name='Tokuda'`, function(err, results){
//         res.send(JSON.stringify(results));
//     });
// })



module.exports = bookingRouter;
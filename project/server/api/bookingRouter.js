const Router = require('express').Router;
const bookingRouter = Router();
const db = require('../database/database');

//Tokuda
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

//IvanRilski
bookingRouter.post('/ivan-rilski', (req,res) => {
    const {firstName, email, date} = req.body;
    const hospitalName = 'IvanRilski';
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
    res.status(201).send('Your bed is booked successfully!');
})
bookingRouter.get('/ivan-rilski', (req,res) => {
    const freeBeds = db.query(`SELECT freeBeds, covidPatients from hospitals where name='IvanRilski'`, function(err, results){
        res.send(JSON.stringify(results));
    });
})
bookingRouter.put('/ivan-rilski', (req,res) => {
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE name='IvanRilski'`);
    res.send('Number of beds is updated.');
});
//MilitaryMedicalAcademy
bookingRouter.post('/military-medical', (req,res) => {
    const {firstName, email, date} = req.body;
    const hospitalName = 'MilitaryMedicalAcademy';
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
    res.status(201).send('Your bed is booked successfully!');
})
bookingRouter.get('/military-medical', (req,res) => {
    const freeBeds = db.query(`SELECT freeBeds, covidPatients from hospitals where name='MilitaryMedicalAcademy'`, function(err, results){
        res.send(JSON.stringify(results));
    });
})
bookingRouter.put('/military-medical', (req,res) => {
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE name='MilitaryMedicalAcademy'`);
    res.send('Number of beds is updated.');
});

//Nadezhda
bookingRouter.post('/nadezhda', (req,res) => {
    const {firstName, email, date} = req.body;
    const hospitalName = 'Nadezhda';
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
    res.status(201).send('Your bed is booked successfully!');
})
bookingRouter.get('/nadezhda', (req,res) => {
    const freeBeds = db.query(`SELECT freeBeds, covidPatients from hospitals where name='Nadezhda'`, function(err, results){
        res.send(JSON.stringify(results));
    });
})
bookingRouter.put('/nadezhda', (req,res) => {
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE name='Nadezhda'`);
    res.send('Number of beds is updated.');
});
//Pirogov
bookingRouter.post('/pirogov', (req,res) => {
    const {firstName, email, date} = req.body;
   // console.log(firstName);
    const hospitalName = 'Pirogov';
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
    res.status(201).send('Your bed is booked successfully!');
})
bookingRouter.get('/pirogov', (req,res) => {
    const freeBeds = db.query(`SELECT freeBeds, covidPatients from hospitals where name='Pirogov'`, function(err, results){
        res.send(JSON.stringify(results));
    });
})
bookingRouter.put('/pirogov', (req,res) => {
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE name='Pirogov'`);
    res.send('Number of beds is updated.');
});
//Serdika
bookingRouter.post('/serdika', (req,res) => {
    const {firstName, email, date} = req.body;
    const hospitalName = 'Serdika';
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
    res.status(201).send('Your bed is booked successfully!');
})
bookingRouter.get('/serdika', (req,res) => {
    const freeBeds = db.query(`SELECT freeBeds, covidPatients from hospitals where name='Serdika'`, function(err, results){
        res.send(JSON.stringify(results));
    });
})
bookingRouter.put('/serdika', (req,res) => {
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE name='Serdika'`);
    res.send('Number of beds is updated.');
});
//Sveta Sofia
bookingRouter.post('/sveta-sofia', (req,res) => {
    const {firstName, email, date} = req.body;
    const hospitalName = 'SvetaSofia';
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
    res.status(201).send('Your bed is booked successfully!');
})
bookingRouter.get('/sveta-sofia', (req,res) => {
    const freeBeds = db.query(`SELECT freeBeds, covidPatients from hospitals where name='SvetaSofia'`, function(err, results){
        res.send(JSON.stringify(results));
    });
})
bookingRouter.put('/sveta-sofia', (req,res) => {
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE name='SvetaSofia'`);
    res.send('Number of beds is updated.');
});
//Wtora Bolnica
bookingRouter.post('/wtora-bolnica', (req,res) => {
    const {firstName, email, date} = req.body;
    const hospitalName = 'WtoraBolnica';
    db.query(`INSERT INTO bookings VALUES('${firstName}', '${email}', '${date}', '${hospitalName}')`);
    res.status(201).send('Your bed is booked successfully!');
})
bookingRouter.get('/wtora-bolnica', (req,res) => {
    const freeBeds = db.query(`SELECT freeBeds, covidPatients from hospitals where name='WtoraBolnica'`, function(err, results){
        res.send(JSON.stringify(results));
    });
})
bookingRouter.put('/wtora-bolnica', (req,res) => {
    db.query(`UPDATE hospitals SET freeBeds=freeBeds-1 WHERE name='WtoraBolnica'`);
    res.send('Number of beds is updated.');
});

module.exports = bookingRouter;
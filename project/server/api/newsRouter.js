const Router = require('express').Router;
const newsRouter = Router();
const db = require('../database/database');


newsRouter.get('/showNews', (req,res) => {
  const data = db.query(`SELECT name, freebeds FROM hospitals`, function(err, results){
    res.send(JSON.stringify(results));
});
})

module.exports = newsRouter;
const express = require('express');
const testRoute = express.Router();
let db = require("../db")

async function getPeople() {
    const rows = await db.query('SELECT * FROM people');
    return rows;

};

testRoute.route('/').get( async function (req,res,next) {
    try{
        let people = await getPeople();
        console.log(people);
        res.json(people);
    }
    catch (e){
        console.log('error: ', e);
        next(err);
    }
})

module.exports = testRoute;
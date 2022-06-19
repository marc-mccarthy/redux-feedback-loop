const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.post('/', (req, res) => {
    let queryString = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    let values = [req.body.feelings, req.body.understanding, req.body.supported, req.body.comments];
    pool.query(queryString, values).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
    let queryString = `SELECT * FROM feedback ORDER BY id DESC`;
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

router.put('/', (req, res) => {
    let queryString = 'UPDATE feedback SET flagged=$1 WHERE id=$2';
    let values = [req.query.flag, req.query.id];
    pool.query(queryString, values).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;

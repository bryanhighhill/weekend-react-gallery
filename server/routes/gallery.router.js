const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('req.params in PUT: ', req.params);
    let queryText = 'UPDATE "images" SET "likes" = "likes" + 1 WHERE "id" = $1'
    pool.query(queryText, [req.params.id])
    .then(() => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error with put request to db: ', error);
        res.sendStatus(500);
    })
}); // END PUT Route

router.post('/', (req, res) => {
    let queryText = 'INSERT INTO "images" ("path", "description") VALUES  ($1,$2);';
    pool.query(queryText, [req.body.url, req.body.description])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error with POST request to db: ', error);
        res.sendStatus(500);
    })
})

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    let queryText = 'SELECT * from "images" ORDER BY "id" asc;';
    pool.query(queryText)
    .then((result) => {
        console.log('results from DB', result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error making a query :', error);
        res.sendStatus(500);
    })
});

module.exports = router;
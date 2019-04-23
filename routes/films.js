var express = require('express');
var router = express.Router();
const SqlRunner = require('../db/sql_runner');

//GET all the films
router.get('/', function(req, res) {
  SqlRunner.run("SELECT * FROM films ORDER BY title ASC").then(result => {
  res.status(200).json(result.rows);
  });
});

//GET a particular film from ID
router.get('/:id', function(req, res) {
  SqlRunner.run("SELECT * FROM characters WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(200).json(result.rows);
    });
});

//POST a new film
router.post('/', function(req, res) {
  SqlRunner.run("INSERT INTO films (title, main_star, year_released) VALUES ($1, $2, $3)",
    [req.body.title, req.body. main_star, req.body.year_released])
      .then((result) => {
        res.status(201).json(result);
    });
});

// DELETE a film by id
router.delete('/:id', function(req, res) {
  SqlRunner.run("DELETE FROM films WHERE id = $1", [req.params.id]).then(
    result => {
      res.status(200).json(result);
    });
});

module.exports = router;

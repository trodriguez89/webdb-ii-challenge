const express = require("express");
const knex = require("knex");

const db = require("../data/dbConfig");

const { validateId, validateCarInfo } = require("../middleware/middleware");

const router = express.Router();

//GET requests
router.get("/", (req, res) => {
  db("cars")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Error retrieving list of cars." })
    })
});

router.get("/:id", validateId, (req, res) => {
  const carId = req.params.id
  db("cars").where({ id: carId })
    .first()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Error retrieving this car." })
    })
});

//POST requests
router.post("/", validateCarInfo, (req, res) => {
  const body = req.body;
  db("cars")
    .insert(body)
    .then(newId => {
      db("cars")
        .where({ id: newId[0] })
        .then(data => {
          res.status(201).json(data)
        })
        .catch(error => {
          console.log(error)
          res.status(500).json({ errorMessage: "Error adding new car." })
        })
    })
});

//PUT requests
router.put("/:id", validateCarInfo, (req, res) => {
  const updateId = req.params.id;
  const body = req.body;
  db("cars")
    .where({ id: updateId })
    .update(body)
    .then(data => {
      res.status(201).json({ message: "Car successfully updated", data })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Error updating car." })
    })
});

//DELETE requests
router.delete("/:id", validateId, (req, res) => {
  const deleteId = req.params.id;
  db("cars")
    .where({ id: deleteId })
    .del()
    .then(deleted => {
      res.status(200).json(deleted)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Error removing car" })
    })
});


module.exports = router;
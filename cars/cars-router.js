const express = require("express");
const knex = require("knex");

const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true
})

const router = express.Router();

//GET requests
router.get("/", (req, res) => {
    db("cars")
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Error retrieving list of cars."})
    })
});

router.get("/:id", (req, res) => {
    const carId = req.params.id
    db("cars").where({ id: carId })
    .first()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Error retrieving this car."})
    })
});

//POST requests

module.exports = router;
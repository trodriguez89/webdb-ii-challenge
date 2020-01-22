const db = require("../data/dbConfig");

function validateId(req, res, next) {
    const Id = req.params.id;
    db("cars")
        .where({ id: Id })
        .first()
        .then(data => {
            if (!data) {
                res.status(400).json({ message: "Invalid ID" })
            } else {
                next()
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: "error retrieving ID" })
        })
};

function validateCarInfo(req, res, next) {
    const body = req.body;
    if (!body) {
        res.status(400).json({ message: "Missing user Data" })
    } else if (!body.VIN) {
        res.status(400).json({ message: "Missing required VIN field" })
    } else if (!body.make) {
        res.status(400).json({ message: "Missing required make field" })
    } else if (!body.model) {
        res.status(400).json({ message: "Missing required model field" })
    } else if (!body.mileage) {
        res.status(400).json({ message: "Missing required mileage field" })
    } else {
        next();
    }
};

module.exports = {
    validateId,
    validateCarInfo
}


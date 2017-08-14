let express = require("express");
let Driver = require("./../models/drivers");
let driverHelper = require("./../helper/driverHelper");

let router = express.Router();

router.get("/", (req, res) => {
    res.json({"d":"driver endpoint"});
});

router.post("/add", (req, res) => {
    let driver = new Driver({
        "name": req.query.name,
        "surname": req.query.surname
    });

    let promise = driver.save();
    promise.then((err) => {
        if(err)
            res.json(err);

        res.json({
            "message": "Driver created!",
            "status": 1
        });
    }).catch(() => {
        console.log("Promise Rejected");
    });


});

router.get("/get/:id", (req, res) => {
    Driver.findById(req.params.id, (err, driver) => {
        if (err)
            res.json(err);

        res.json(driver);
    });
});

router.put("/update/:id", (req, res) => {
    Driver.findById(req.params.id, (err, driver) => {
        if (err)
            res.json(err);

        driver.name = req.query.name;
        driver.surname = req.query.surname;

        driver.save((err) => {
            if (err)
                res.send(err);

            res.json({
                "message": "driver updated!",
                "status": 1
            });
        });
    });
});

router.delete("/delete/:id", (req, res) => {
    Driver.remove({"_id": req.params.id}, (err) => {
        if (err)
            res.json(err);

        res.json({
            "message": "Successfully deleted",
            "status": 1
        });
    });
});

router.get("/getAll", (req, res) => {
    Driver.find((err, drivers) => {
        if (err)
            res.json(err);

        res.json(drivers);
    });
});

router.get("/ride", (req, res) => {
    Driver.find((err, drivers) => {
        if (err) 
            res.json(err);

        /*
		 * Example coordinates
		 * Yeditepe Üniversitesi (Kayışdağı)
		*/
        let exampleCoord = { lat:"40.974571", long: "29.153885" }; 

        let distances = [];
        for(let i=0; i < drivers.length; i++ ){
            driverHelper.distance(exampleCoord.lat, exampleCoord.long, drivers[i].lat, drivers[i].long, (data) => {
                distances.push({"distance": data, "driver": drivers[i]});
            });
        }

        res.json(distances.sort((a, b) => {
            return parseFloat(a.distance) - parseFloat(b.distance);
        }).slice(0,3));

    });
});

module.exports = router;
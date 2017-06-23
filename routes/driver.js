var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Driver = require('./../models/drivers');

router.get('/', function(req, res, next) {
	res.json({'d':'driver endpoint'});
});

router.post('/add', function(req, res, next) {
	var driver = new Driver({
		'name': req.query.name,
		'surname': req.query.surname
	});

	driver.save(function(err) {
		if (err)
			res.json(err);
		
		res.json({
			'message': 'Driver created!',
			'status': 1
		});
  });
});

router.get('/get/:id', function(req, res, next) {
	Driver.findById(req.params.id, function(err, driver) {
		if (err)
			res.json(err);

		res.json(driver)
	});
});

router.put('/update/:id', function(req, res, next) {
	Driver.findById(req.params.id, function(err, driver) {
		if (err)
			res.json(err);

		driver.name = req.query.name;
		driver.surname = req.query.surname;

		driver.save(function(err){
			if (err)
				res.send(err);

			res.json({
				'message': 'driver updated!',
				'status': 1
			});
		});
	});
});

router.delete('/delete/:id', function(req, res, next) {
	Driver.remove({"_id": req.params.id}, function(err, driver) {
		if (err)
			res.json(err);
		res.json({
			'message': 'Successfully deleted',
			'status': 1
		})
	});
});

router.get('/getAll', function(req, res, next) {
	Driver.find( function(err, drivers) {
		if (err)
			res.json(err);

		res.json(drivers)
	});
});

module.exports = router;
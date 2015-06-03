var express = require('express');
var router = express.Router();
var pg = require('pg');
var stringCon = process.env.DATABASE_URL || 'postgres://localhost:5432/Asesorias';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// CRUD Example


//CREATE

router.post('/api/v1/Asesorias', function(req, res) {

    var results = [];

    // data from http request
    var data = {text: req.body.text, complete: false};

    pg.connect(stringCon, function(err, client, done) {


        client.query("INSERT INTO items(text, complete) values($1, $2)", [data.text, data.complete]);


        // Handle Errors
        if(err) {
          console.log(err);
        }

    });
});

// READ
router.get('/api/v1/Asesorias', function(req, res) {

    var results = [];


    pg.connect(stringCon, function(err, client, done) {

        var query = client.query("SELECT * FROM items ORDER BY id ASC;");


        query.on('row', function(row) {
            results.push(row);
        });


        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if(err) {
          console.log(err);
        }

    });

});




module.exports = router;

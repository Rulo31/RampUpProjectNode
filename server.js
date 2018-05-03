// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Bear     = require('./ts-built/models/bear');
var AuditLog     = require('./ts-built/models/AuditLog');

//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
mongoose.connect('mongodb://localhost/RampUpProjectNode');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    //console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});  

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/node', router);

// on routes that end in /bears
// ----------------------------------------------------
router.route('/AuditLog')

// create a bear (accessed at POST http://localhost:3000/node/api/AuditLog)
.post(function(req, res) {
    if (req.body.AuditLogs){
        AuditLog.create(req.body.AuditLogs, function(err){
        if(err)
            res.send(err);
    
        else
            res.json(req.body);
        });
    }
    else {
        var newAuditLog = new AuditLog(req.body);

        newAuditLog.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Audit Log created!' });
        });
    } 
})

// get all the audit logs (accessed at GET http://localhost:3000/node/api/AuditLog)
.get(function(req, res) {
    AuditLog.find(function(err, bears) {
        if (err)
            res.send(err);

        res.json(bears);
    });
})

.delete(function(req, res) {
    AuditLog.remove(function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

// on routes that end in /AuditLog/:field
// ----------------------------------------------------
router.route('/AuditLog/:Object_Type/:Object_Id')

    // get the bear with that id (accessed at GET http://localhost:3000/AuditLog/:Object_Type/:Object_Id)
    .get(function(req, res) {
        AuditLog.find({ Object_Type: req.params.Object_Type, Object_Id: req.params.Object_Id }, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
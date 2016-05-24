// Load packages
var Comm = require('../models/comms');
var User = require('../models/user');

exports.searchComms = function(req, res) {
  console.log(req.query);
  //if(!req.query.name || !req.query.loc ) return res.json([]);
  Comm.find(
    { name: new RegExp(req.query.name, 'i'),
      location:  new RegExp(req.query.loc, 'i')
    },
    {ownership: 0},
    function( err, comms ) {
      if (err) res.send(err);
      res.json(comms);
    }
  )
};
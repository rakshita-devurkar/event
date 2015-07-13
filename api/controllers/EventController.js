/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  new: function(req, res) {
    res.view();
  },
  create: function(req, res) {
    var eventname = req.body.name;
    var eventlocation = req.body.location;
    var eventdate = req.body.date;
    sails.log(eventname);
    sails.log(eventlocation);
    sails.log(eventdate);
    Event.create({
      name: eventname,
      location: eventlocation,
      date: eventdate
    }).exec(function(error, events) {
      if (error) res.serverError();
      else res.redirect("http://localhost:1337/event/find");
    });
  },
  find: function(req, res) {
    Event.find(function(error, events) {
      if (error) res.serverError();
      else res.view('event/find', {
        inserted: events
      });
    });
  },
  findone: function(req, res) {
    var eventid = req.query.id;
    sails.log(eventid);
    Event.findOne({
      id: eventid
    }, function(error, found) {
      if (error) res.serverError();
      else res.view('event/findone', {
        inserted: found
      });
    });
  },
  edit: function(req, res) {
    var eventid = req.query.id;
    sails.log(eventid);
    Event.findOne({
      id: eventid
    }, function(error, found) {
      res.view('event/edit', {
        inserted: found
      });
    });
  },
  update: function(req, res) {
    var eventid = req.params.id;
    var eventname = req.body.name;
    var eventlocation = req.body.location;
    var eventdate = req.body.date;
    sails.log("update entry point");
    Event.update(eventid, {
      name: eventname,
      location: eventlocation,
      date: eventdate
    }).exec(function(error, users) {
      if (error) res.serverError();
      else res.ok("Success");
    });
  },
  destroy: function(req, res) {
    var eventid = req.params.id;
    sails.log(eventid);
    Event.destroy(eventid).exec(function(error, users) {
      if (error) res.serverError();
      else res.ok("Done"); //res.redirect("http://localhost:1337/event/find");
    });
  },
};
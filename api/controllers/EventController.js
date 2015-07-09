/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	viewhomepage : function(req,res){
		res.view('homepage');
	},

	eventinsertview: function(req,res){
		res.view('eventform');
	},


		insert:function(req,res){
		var eventname = req.body.name;
		var eventlocation = req.body.location;
		var eventdate = req.body.date;
		sails.log(eventname);
		sails.log(eventlocation);
		sails.log(eventdate);
		Event.create({name: eventname, location: eventlocation, date: eventdate}).exec(function(error,events){
			if(error)
				res.serverError();
			else
				res.ok("Event added");
		});
	},

	

	
	viewevents: function(req,res){
		Event.find(function(error,events){
			if(error)
				res.serverError();
			else
				res.view('eventview',{inserted : events});
		});
	},

	oneevent: function(req,res){
		var eventid = req.query.id;
		sails.log(eventid);
		Event.findOne({id:eventid}, function(error,found){
			if(error)
				res.serverError();
			else
				res.view('oneevent',{inserted : found});
		});

	},
	
	updateview : function(req,res){
		var eventid = req.query.id;
		sails.log(eventid);
		Event.findOne({id:eventid},function(error,found){
			res.view('update',{inserted : found});
		});
	},

	update : function(req,res){
		var eventid = req.body.id;
		var eventname = req.body.name;
		var eventlocation = req.body.location;
		var eventdate = req.body.date;
		sails.log(eventid);
		Event.update(eventid,{name :eventname,location : eventlocation,date : eventdate}).exec(function(error,users){
			if(error)
				res.serverError();
			else
				res.ok("Event Updated");
		});
	},

	delete : function(req,res){
		var eventid = req.query.id;
		Event.destroy(eventid).exec(function(error,users){
			if(error)
				res.serverError();
			else
				res.ok("Event deleted");

		});
	},	
};


/**
 * AttendeeController
 *
 * @description :: Server-side logic for managing attendees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	homepage : function(req,res){
		res.view('homepage');
	},

	new: function(req,res){
		Event.find(function(error,events){
			if(error)
				res.serverError();
			else
				res.view('attendeeform',{ events : events });

		});
		
	},

	insert:function(req,res){
		var attendeename = req.body.name;
		var eventname = req.body.event1;
		sails.log(attendeename);
		sails.log(eventname);
		Attendee.create({name: attendeename, type : eventname}).exec(function(error,events){
			if(error)
				res.serverError();
			else
				res.ok("Attendee added.");
		});
	},

	viewall: function(req,res){
		Attendee.find(function(error,attendee){
			if(error)
				res.serverError();
			else
			{
				sails.log(attendee);
				res.view('attendeeview',{inserted : attendee});
			}
				
		});
	},

	view: function(req,res){
		var attendeeid = req.query.id;
		Attendee.findOne({id:attendeeid}, function(notFound,found){
			if(notFound)
				res.notFound();
			else
				res.view('oneattendee',{inserted : found});
		});

	},

	updateview : function(req,res){
		var attendeeid = req.query.id;
		Event.find(function(error,events){
			if (error)
				res.serverError();
			else
			{
				Attendee.findOne({id:attendeeid},function(error,found){
				res.view('attendeeupdate',{inserted : found, events : events});
				});

			}
		  
		
		});
	},

	update : function(req,res){
		var attendeeid = req.body.id;
		var attendeename = req.body.name;
		var eventname = req.body.event1;
		Attendee.update(attendeeid,{name :attendeename,type : eventname}).exec(function(error,users){
			if(error)
				res.serverError();
			else
				res.ok("Attendee Updated");
		});
	},

	delete : function(req,res){
		var attendeeid = req.query.id;
		Attendee.destroy(attendeeid).exec(function(error,users){
			if(error)
				res.serverError();
			else
				res.ok("Attendee deleted");

		});
	},	
};


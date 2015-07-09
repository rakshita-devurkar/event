/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  //'get/insert' : 'EventController.insert',
  'post /event/insert' : 'EventController.insert',
  'get /eventinsertview' : 'EventController.eventinsertview',
  'get /viewevents' : 'EventController.viewevents',
  'get /viewhomepage' : 'EventController.viewhomepage',
  'get /oneevent' : 'EventController.oneevent',
  'get /event/updateview' : 'EventController.updateview',
  'post /event/update' : 'EventController.update',
  'get /event/delete' : 'EventController.delete',

  'get /attendeeinsertview' : 'AttendeeController.attendeeinsertview',
  'post /attendee/insert' : 'AttendeeController.insert',
  'get /viewattendees' : 'AttendeeController.viewattendees',
  'get /viewhomepage' : 'AttendeeController.viewhomepage',
  'get /oneattendee' : 'AttendeeController.oneattendee',
  'get /attendee/updateview' : 'AttendeeController.updateview',
  'post /attendee/update' : 'AttendeeController.update',
  'get /attendee/delete' : 'AttendeeController.delete',



  //'get /findone' : 'EventController.findone',
  

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};

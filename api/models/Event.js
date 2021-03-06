/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: 'string'
    },
    location: {
      type: 'string'
    },
    date: {
      type: 'string'
    }
  },
};
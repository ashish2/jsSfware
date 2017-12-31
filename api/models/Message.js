/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	   // Later we can add, personal message (PM) to User
	   // messages: {collection: 'message', via: 'touser'} 
	   // Message Model
	   // attributes{ 
		message: 'string', 
		touser: {
			model: 'user',
		}, 
		byuser: {
			model: 'user',
		}

  }
};


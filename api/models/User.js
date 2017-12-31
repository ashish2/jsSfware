/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  /* User details
	   * id,
	   *
	   * */
	   
	   // v0.1
	   username: 'string',
	   password: 'string',
	   firstname: 'string',
	   lastname: 'string',
	   posts: {
		   collection: 'post',
		   via: 'user'
	   },
	   
	   // Added v0.2
	   displaypic: 'string',
	   messages: {
		   collection: 'message', 
		   via: 'touser'
		}

  }
};


/**
 * Comment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  /* Comment given to/on a Post (Post Model)
	   * */
	  // Eg. JSONs
	  // POST: {content: "comment10", post: 10, user: 1}
	  
	   content: {
		   type: 'string'
	   },
	   
	   user: {
		   model: 'user'
	   },
	   
	  post: {
		  model: 'post',
	  },

  }
};


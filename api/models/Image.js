/**
 * Image.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // These are the images that the User attaches in the Post
  // Eg. His Ubuntu Desktop screenshot or His Terminal screenshot
  attributes: {
	  
	  link: 'string',
	  post: {
		  model: 'post',
	  }
	  
  }
};


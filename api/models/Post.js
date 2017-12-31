/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  /*
	   * Post consist of the content written by the user & the links of images posted by the user 
	   * in that post
	   * id
	   * content
	   * user_id (1_to_1 rel) (This Post was submitted by 1 User)
	   * images_id (1_to_Many rel) (1 Post can contain many Images)
	   *
	   * */
	   
	   content: {
		   type: 'string'
	   },
	   
	   images: {
		   collection: 'image',
		   via: 'post'
	   },
	   
	   user: {
		   model: 'user'
	   },
	   
	   
	   
  }
};


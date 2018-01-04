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
	   
	   
	   /*
	   sails> Post.createEach(
	   [
		{content: "c1", images: {link: "l1"}, user: 1}, 
		{content: "c2", images: {link: "l2"}, user: 1}
		]
		).exec(function(err, r) { console.log("err", err); console.log("r", r); })
		*/
		

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


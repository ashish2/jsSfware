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
		// Eg. JSONs
		// POST: {title: "t1", slug: "st1", comments:[], content: "c1", images: {link: "l1"}, user: 1}
		// {title: "t10", slug: "st10", comments:[{content: "comm2", user: 1}], content: "c10", images: [{link: "l1"}], user: 1}
		// sails> dp = {title: "t1", slug: "st1", content: "c1", user: 1, id: 10}
		
		// Eg. use
		// sails> f = function(err, res) { console.log("err", err); console.log("res ", res) }
		// sails> pi = Post.find({id:10}).populate('images')
		// sails> pi.exec(f)
		
	   	title: {
			// If you have a name for ur terminal ui design, else leave it blank, we will select a default intelligent name & insert it here ;)
			///max_length=512, null=True, default=None, blank=False
			type: 'string'
		},
		
		slug: {
			///max_length=128, default=None, blank=True
			type: 'string'
		},
		
	   content: {
		   type: 'string'
	   },
	   
	   user: {
		   model: 'user'
	   },
	   
		/*
		tags: {
			///help_text="Separate different tags with spaces.", default=''
			* collection= 'tag',
			via: tag
		},
		* 
		*
		* favorites: {
			* // Favorite/Bookmarked by a User
			collection: 'user',
			* via: 'favorite'
		},
		* 
		*/
		
	   	votes: {
			collection: 'vote',
			via: 'post'
		},
  	
	   comments: {
			collection: 'comment',
			via: 'post'
		},
		
	   images: {
		   collection: 'image',
		   via: 'post'
	   },
	   
	   
  }
};


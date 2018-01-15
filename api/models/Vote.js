/**
 * Vote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  // Vote on a Post (Post Model)
	  
	  /*
	   * 	post = models.ForeignKey(Post)
	by_user = models.ForeignKey(User)
	vote = models.IntegerField() # 1 or -1, positive or negative vote
	date = models.DateTimeField(auto_now_add=True)
	status = models.IntegerField(default=None, null=True, blank=True) # values 0-Deactivated, 1-Active, null-probably untouched yet
	* */
	
	/*
	  
	  */
	  
	  vote: {
		  // allowed values 1, -1, default 0
		  // If Upvote then +1, If Downvote then -1, but if Upvote or Downvote clicked again that means they want to remove the vote - 0
		  type: 'integer',
		  enum: [0, -1, 1],
		  defaultsTo: 0
	  },
	  
	  post: {
		  model: 'post',
	  },
	  
	   user: {
		   model: 'user',
	   },
	  
	  status: {
		  type: 'integer', // 0 - Deactivated, 1 - Active
		  enum: [0, 1],
		  defaultsTo: 1
	  },
	  
  }
};


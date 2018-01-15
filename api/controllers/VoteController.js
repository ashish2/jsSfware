/**
 * VoteController
 *
 * @description :: Server-side logic for managing Votes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	// @login_required
	vote: function(req, res) {
		// If Vote Up then save +1 in DB, If Vote Down then save -1 in DB, 
		// If Vote Up/Down clicked again then, since you will add, +1 + +1 = 2, or, -1 + -1 = -2, If you get 2/-2 then make it to 0 which means remove Vote
		// A lot of data checks/validations still to be done here.
		// Like, what if someone is just calling API, with, vote=0, vote=-3 etc sort of payloads. 
		allParams = req.allParams();
		postId = Number(allParams.post);
		// FTM, remove later when user.id sorted out
		userId = Number(allParams.userId);
		///userId = allParams.user.id;
		
		vote = Number(allParams.vote);
		console.log("post ", allParams.postId);
		console.log("vote allP post", allParams.post);
		console.log("vote allP user", allParams.userId);
		
		if(!postId)
			return new Error("PostId empty");
		
		Vote.findOne({post: postId, user: userId}).exec( function(err, row) {
			
			if (err) {
				return res.serverError(err);
			} else if(row) {
				// If row Found
				rv = Number(row.vote);
				
				totalVote = vote + rv;
				console.log(" 1st tV ", totalVote, " vote: ", vote);
				
				// If row.vote was 1 & -1 came in, change to downvote & set it to -1, 
				// row.vote was -1 & 1 came in, change it to upvote & set to 1 
				setVote = vote;
				
				// But if totalVote goes above 1 or below -1, which means the same type of vote came in, then remove the vote & set to 0
				if (vote != -1 && vote != 1) {
					console.log("vote !=");
					setVote = rv;
				}
				else if(totalVote == 2 || totalVote == -2) {
					setVote = 0;
				}
				
				console.log("rv ", rv, ", tV ", totalVote, " sV ", setVote);
				
				findDict = {post: postId, user: userId};
				updateDict = {vote: setVote};
				
				Vote.update(findDict, updateDict).exec( function(err, row) {
					if(err)
						return res.serverError(err);
					else {
						return res.json({"success": row});
					}
				});
			} else {
				// Else If No Row, then create
				// set vote to whatever that is coming in, +1 or -1
				console.log("No row ");
				dict = {vote: vote, post: postId, user: userId};
				
				Vote.create(dict).exec( function(err, row) {
					if(err)
						return res.serverError(err);
					else {
						return res.json({"success": row});
					}
				});
			}
			
		});
		
		
		
		
		// FTM
		//return res.json({s: "Success"});
		
	},
	
	hw: function(req, res) {
		return res.json({"Hello": ", World!"});
	},
	
	
	
	
};


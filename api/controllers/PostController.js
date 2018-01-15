/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// Functions added in module.exports will be available as url.
	// E.g. /post/adore.
	// adore: function (req, res) { res.send("I adore pets"); }
	
	// Upload File to servers disk
	// Default routeName: /post/upload.
	upload: function (req, res) {
		// e.g.
		// 0 => infinite
		// 240000 => 4 minutes (240,000 miliseconds)
		// etc.
		//
		// Node defaults to 2 minutes.
		res.setTimeout(0);
		
		console.log("req. body", req.body);
		console.log("req.allParms().content", req.allParams().content);
		
		// function to Clean & sanitize, validate, content here
		// Library function
		//function sanitize() {}
		content = req.allParams().content;
		
		
		req.file('uploads')
		.upload({
			
		  // default folder, projectRoot/.tmp/uploads
		  // You can apply a file upload limit (in bytes)
		  maxBytes: 1000000,
		  //dirname: require('path').resolve(sails.config.appPath, 'uploads/1/terminal')
		},
		function whenDone(err, uploadedFiles) {
		  if (err) 
			return res.serverError(err);
		  else {
			  //console.log("success");
			// TODO: Once the files have been uploaded, rename uploaded image files & make entry in DB also
			  
			  // Prepare Array valuesList to enter into Post model
			  // Array valuesList: [ {content: "c1", images: {link: "l1"}, user: 1}, {content: "c2", images: {link: "l2"}, user: 1} ]
			  
			  //console.log("uploadedFiles", uploadedFiles);
			  //console.log("typeof uploadedFiles", typeof uploadedFiles);
			  
			  //arrayOfDicts = [];
			  
			  postDict = {};
			  postDict.content = content;
			  postDict.images = [];
			  postDict.user = 5;
			  
			  
			  for( e in uploadedFiles) {
				  /*
				  dict = {};
				  dict.content = "content by " + e;
				  dict.images = {};
				  filenameunique = uploadedFiles[e].fd.split("/").pop();
				  dict.images.link = filenameunique;
				  dict.images.filenameunique = filenameunique;
				  dict.images.filenameoriginal = uploadedFiles[e].filename.substring(1);
				  dict.user = e
				  arrayOfDicts.push(dict)
				  */
				  
				  filenameunique = uploadedFiles[e].fd.split("/").pop();
				  postDict.images[e] = {};
				  postDict.images[e].link = filenameunique;
				  postDict.images[e].filenameunique = filenameunique;
				  postDict.images[e].filenameoriginal = uploadedFiles[e].filename.substring(1);
			  }
			  
			  // No need to do a return on Post.create(). But i wonder why?
			  //return Post.createEach( arrayOfDicts).exec(function(err, succ) { 
			  //return Post.create( postDict ).exec(function(err, succ) { 
			  Post.create( postDict ).exec(function(err, succ) { 
				  
				  if (err) {
					  //console.log("err", err); 
					  return err;
					}
				  else {
					  //console.log("succ", succ);
					  // Returning success;
					  return res.json({
						files: uploadedFiles,
						textParams: req.allParams()
					  });
					}
				}
				);
				
			  /*
			  return res.json({
				files: uploadedFiles,
				textParams: req.allParams()
			  });
			  * 
			  * */
		  }
		});
		
	},
	
	


};


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
	upload: function (req, res) {
		// e.g.
		// 0 => infinite
		// 240000 => 4 minutes (240,000 miliseconds)
		// etc.
		//
		// Node defaults to 2 minutes.
		res.setTimeout(0);

		req.file('uploads')
		.upload({
			
		  // default folder, projectRoot/.tmp/uploads
		  // You can apply a file upload limit (in bytes)
		  maxBytes: 1000000,
		  //dirname: require('path').resolve(sails.config.appPath, 'uploads/1/terminal')
		},
		function whenDone(err, uploadedFiles) {
		  if (err) return res.serverError(err);
		  else {
			  //console.log("success");
			// TODO: Once the files have been uploaded, rename uploaded image files & make entry in DB also
			  
			  // Prepare Array valuesList to enter into Post model
			  // Array valuesList: [ {content: "c1", images: {link: "l1"}, user: 1}, {content: "c2", images: {link: "l2"}, user: 1} ]
			  
			  //console.log("uploadedFiles", uploadedFiles);
			  //console.log("typeof uploadedFiles", typeof uploadedFiles);
			  
			  arrayOfDicts = [];
			  
			  postDict = {};
			  postDict.content = "content by u1";
			  postDict.images = [];
			  postDict.user = 1;
			  
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
			  
			  //return Post.createEach( arrayOfDicts).exec(function(err, succ) { 
			  return Post.create( postDict ).exec(function(err, succ) { 
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


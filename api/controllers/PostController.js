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
		
		console.log("upload f");
		console.log("req", req);
		
		// e.g.
		// 0 => infinite
		// 240000 => 4 minutes (240,000 miliseconds)
		// etc.
		//
		// Node defaults to 2 minutes.
		res.setTimeout(0);

		req.file('uploads')
		.upload({
			// TODO: Rename uploaded image files & make entry in DB also
			
		  // default folder, projectRoot/.tmp/uploads
		  // You can apply a file upload limit (in bytes)
		  maxBytes: 1000000,
		  //dirname: require('path').resolve(sails.config.appPath, 'uploads/1/terminal')
		},
		function whenDone(err, uploadedFiles) {
		  if (err) return res.serverError(err);
		  else {
			  console.log("success");
			  return res.json({
				files: uploadedFiles,
				textParams: req.allParams()
			  });
		  }
		});
		
	},


};


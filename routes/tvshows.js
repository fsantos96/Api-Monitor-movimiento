//File: routes/tvshows.js
module.exports = function(app) {
  //GET
//   getfunction = function(req, res) {
//   	TVShow.find(function(err, tvshows) {
//   		if(!err) {
//         console.log('GET /tvshows')
//   			res.send(tvshows);
//   		} else {
//   			console.log('ERROR: ' + err);
//   		}
//   	});
//   };


  //POST - Insert a new TVShow in the DB
//   addTVShow = function(req, res) {
//   	console.log('POST');
//   	console.log(req.body);

//   	var tvshow = new TVShow({
//   		title:    req.body.title,
//   		year: 	  req.body.year,
//   		country:  req.body.country,
//   		poster:   req.body.poster,
//   		seasons:  req.body.seasons,
//   		genre:    req.body.genre,
//   		summary:  req.body.summary  
//   	});

//   	tvshow.save(function(err) {
//   		if(!err) {
//   			console.log('Created');
//   		} else {
//   			console.log('ERROR: ' + err);
//   		}
//   	});

//   	res.send(tvshow);
//   };

 

//   app.get('/tvshows', findAllTVShows);
//   app.post('/tvshow', addTVShow);

}
var helpers = require('./routeHelpers.js');


module.exports.router = function (app) {

  app.get('/', function(req,res){
      res.send(200).end();
  });

  //API calls
  app.post('/newtrip', helpers.isLoggedIn, helpers.newTrip);

  app.post('/hotels', helpers.isLoggedIn, helpers.postHotels);

  app.post('/restaurants', helpers.isLoggedIn, helpers.postRestaurants);

  app.post('/arts', helpers.isLoggedIn, helpers.postArts);

  app.post('/weather', helpers.isLoggedIn, helpers.postWeather);

  app.post('/promos', helpers.isLoggedIn, helpers.postPromos);

  app.post('/events', helpers.isLoggedIn, helpers.postEvents);

  app.post('/translate', helpers.isLoggedIn, helpers.postTranslate);

  app.post('/flights', helpers.isLoggedIn, helpers.postFlights);

  app.post('/images', helpers.isLoggedIn, helpers.postImages);

  //Authentication
  app.post('/signin', helpers.signIn);

  app.post('/signup', helpers.signUp);

  //User's trips
  app.get('/trips', helpers.isLoggedIn, helpers.getTrips);

  app.post('/myflights', helpers.isLoggedIn, helpers.saveFlight);

  app.post('/myhotels', helpers.isLoggedIn, helpers.saveHotels);

  app.post('/myrestaurants', helpers.isLoggedIn, helpers.saveRestaurants);

  app.post('/myevents', helpers.isLoggedIn, helpers.saveEvents);

  app.post('/myplaces', helpers.isLoggedIn, helpers.savePlaces);

};

var passport = require('passport');
var models = require('../db/models');

passport.use(new DigestStrategy({qop: 'auth'}, 
	function(username, done) {

	}
));
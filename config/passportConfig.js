const Jwtstrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const config = require("../config/key");

var User = require("../models/user");


module.exports = function(passport) {
    let opts = {} ;
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt') ;
    opts.secretOrKey = config.secret ;
    passport.use(new Jwtstrategy(opts , (jwt_payload , done) => {
        console.log(User);
        if(User.id === jwt_payload.id ){
            return done(null , User) ;
        }
        else return done(null , false) ;
    })) ;
}
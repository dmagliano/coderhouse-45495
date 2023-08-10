import passport from 'passport';
import jwt from 'passport-jwt';
import { UserModel } from '../models/user.model.js';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {

    console.log("Autenticate");

    passport.use('jwt', new
        JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: 'umaStringDeChar',
        }, async (token, done) => {
            try {
                return done(null, token);
            } catch (error) {
                done(error);
            }
        })    
    );

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await UserModel.findById(id);
        done(null, user)
    });
};

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['acess_token'];
    }
    return token;
}

export default initializePassport;
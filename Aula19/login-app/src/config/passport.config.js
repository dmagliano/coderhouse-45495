import passport from 'passport';
import GitHubStrategy from 'passport-github2';
import { UserModel } from '../models/user.model.js';

const initializePassport = () => {

    passport.use('github', new GitHubStrategy({
        clientID: 'Iv1.0a937f47224d66e3',
        clientSecret: '216d4f25e882d262bc8b2ca18a065462c247dfeb',
        callbackURL: 'http://localhost:8080/api/login/githubcallback'
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile);
            let user = await UserModel.findOne({ email: ( profile._json.email ? profile._json.email : profile._json.login ) });
            if (!user) {
                let newUser = {
                    nome: profile._json.name,
                    email: ( profile._json.email ? profile._json.email : profile._json.login ),
                    sobrenome: '',
                    idade: 99,
                    password: '',
                }
                let result = await UserModel.create(newUser);
                console.log('result criacao: ' + result);
                done(null, result);
            }
            else {
                done(null, user);
            }
        }
        catch (error) {
            done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await UserModel.findById(id);
        done(null, user)
    });
};

export default initializePassport;
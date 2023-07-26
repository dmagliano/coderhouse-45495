import passport from 'passport';
import local from 'passport-local'
import { UserModel } from '../models/user.model.js';
import { createHash, isValidPassword } from '../utils.js';

const LocalStrategy = local.Strategy;

const initializePassport = () => {
    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' }, async (req, username, password, done) => {
            const { nome, sobrenome, idade, email } = req.body;
            try {
                let user = await UserModel.findOne({ email: username });
                if (user) {
                    return done(null, false, { message: 'Email já cadastrado' });
                }
                let novoUsuario = {
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    idade: idade,
                    password: createHash(password)
                }
                let result = await UserModel.create(novoUsuario);

                return done(null, result);
            } catch (error) {
                return done(`Erro ao obter o usuario ${error}`);
            }
        }
    ))

    passport.use('login', new LocalStrategy({usernameField: 'email'}, async (username, password, done) => {
        try {
            const user = await UserModel.findOne({ email: username })
            if (!user) {
                return done(null, false);
            }
            if (!isValidPassword(user, password)) {
                return done(null, false);
            }
            return done(null, user);
        } catch(error) {
            return done(error);
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
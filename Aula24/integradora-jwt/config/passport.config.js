import express from 'express';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import { UserModel } from '../models/user.model.js';

const initializePassport = () => {

    passport.use('jwt', new passportJWT.Strategy({}, async (userEmail, user, done) => {
        try {
            let user = await UserModel.findOne({ email: userEmail.email });

            if (!user) {
                return done(null, false);
            } else {
                return done(null, user);
            }
        } catch (error) {
            done(error);
        }
    }));

};

export default initializePassport;
import jwt from 'jsonwebtoken';

const PRIVATE_KEY = 'umaStringDeChar';

export const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
}

export const authToken = (req, res, next) => {
    const authReader = req.headers.authorization;
    if (!authReader) {
        return res.status(401).send('Token não informado');
    }
    const token = authReader.split(' ')[1];
    jwt.verify(token, PRIVATE_KEY, (error, user) => {
        if (error) {
            return res.status(403).send('Token invalido');
        }
        req.user = credetials.user;
        next();
    })
}   
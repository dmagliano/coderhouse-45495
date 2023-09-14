import express from 'express';
import passport from 'passport';
import passportJWT from 'passport-jwt';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Sample user data (replace with your own authentication mechanism)
const users = [
  { id: 1, username: 'user1', password: '123456' },
  { id: 2, username: 'user2', password: '654321' }
];

// Secret key for JWT
const secretKey = 'your-secret-key';

// Setup passport
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey
    },
    (jwtPayload, done) => {
      // Find the user by ID (in a real application, you would query a database)
      const user = users.find(u => u.id === jwtPayload.id);

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  )
);

// Middleware to protect routes with JWT
const protectedRoute = passport.authenticate('jwt', { session: false });

// Login route to generate JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username: user.username }, secretKey);
    console.log('User authenticated: ' + username);
    res.json({ token });
  } else {
    console.log('Authentication failed for user: ' + username);
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Protected route
app.get('/protected', protectedRoute, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

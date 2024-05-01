// isAuthenticated.js

const admin = require('firebase-admin');

const isAuthenticated = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Invalid or missing authorization header' });
    }

    const token = authorizationHeader.split('Bearer ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Invalid authorization header format' });
    }

    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach the user object to the request
    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error('Error verifying user token:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = isAuthenticated;

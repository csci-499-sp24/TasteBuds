const express = require('express');
const router = express.Router();
const { auth, firestore } = require('./firebaseConfig');
const admin = require('firebase-admin');

const verifyUserToken = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    return uid;
  } catch (error) {
    console.error('Error verifying the user token:', error);
    throw error;
  }
};

const getUserDetails = async (userId) => {
  try {
    const userDoc = await firestore.collection('users').doc(userId).get();
    if (!userDoc.exists) {
      throw new Error('User not found');
    }
    return userDoc.data();
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    console.log('User ID:', userId);

    const authorizationHeader = req.headers.authorization;
    console.log('Authorization Header:', authorizationHeader);

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Invalid or missing authorization header' });
    }

    const token = authorizationHeader.split('Bearer ')[1];
    console.log('Token:', token);

    if (!token) {
      return res.status(401).json({ error: 'Invalid authorization header format' });
    }

    const uid = await verifyUserToken(token);
    console.log('Verified UID:', uid); 

    if (uid !== userId) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    const userDetails = await getUserDetails(userId);
    console.log('User Details:', userDetails);

    res.json(userDetails);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

module.exports = router;
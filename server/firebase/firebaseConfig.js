var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://capstone-theband-default-rtdb.firebaseio.com"
});

const auth = admin.auth();
const firestore = admin.firestore();

module.exports = { 
  auth,
  firestore,
};
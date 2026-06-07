const firebaseConfig = {
  apiKey: "AIzaSyA8DXjXbKQVD612GpP8uax0pNE7DPQrTlU",
  authDomain: "night-sky-80b91.firebaseapp.com",
  projectId: "night-sky-80b91",
  storageBucket: "night-sky-80b91.firebasestorage.app",
  messagingSenderId: "219533237004",
  appId: "1:219533237004:web:79c03d20cb48fbb2c2c729"
};

window.SKY_CONFIG = {
  firebase: {
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    databaseURL: "https://night-sky-80b91-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: firebaseConfig.projectId,
    appId: firebaseConfig.appId
  }
};

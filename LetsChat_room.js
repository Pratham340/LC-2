var firebaseConfig = {
    apiKey: "AIzaSyBbbD__WmO_VISFRtoerkOOToEktRwLTmo",
    authDomain: "letschat-da7ab.firebaseapp.com",
    databaseURL: "https://letschat-da7ab-default-rtdb.firebaseio.com",
    projectId: "letschat-da7ab",
    storageBucket: "letschat-da7ab.appspot.com",
    messagingSenderId: "73682676966",
    appId: "1:73682676966:web:db9dc8dc154829393cdf27",
    measurementId: "G-MMVLW68931"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

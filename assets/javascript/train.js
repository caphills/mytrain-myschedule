 $(document).ready(function(){
 // Initialize Firebase
   var config = {
    apiKey: "AIzaSyAmqi0i_zpvcJH7Exvm9kIe8Orbvla3sGE",
    authDomain: "my-train-schedule-97c96.firebaseapp.com",
    databaseURL: "https://my-train-schedule-97c96.firebaseio.com",
    projectId: "my-train-schedule-97c96",
    storageBucket: "my-train-schedule-97c96.appspot.com",
    messagingSenderId: "650655840806"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  // convert train time

  var currentTime = moment();
  console.log("Current Time: " + currentTime);


 //get elements
 // create reference
 // const dbRefObject = firebase.database().ref().child("object");

 // // sync object
 // dbRefObject.on("value", snap => {
 // 	preObject.innerText = JSON.stringify(snap.val(), null, 3);
 // });
 // function for capturing buttons clicks
 $("#addTrain").on("click", function(){
  var trainName = $("#name-input").val().trim();
  var destination = $("#destination-input");
  var frequency = $("#frequency-input");
  var nextArrival = $("#name-input");
  var minutesAway = $("#frequency-input");
  var addTrain = $("#addTrain");


 })

 



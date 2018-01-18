 // $(document).ready(function(){
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
  console.log("CURRENT TIME: " + currentTime);


 // function for capturing buttons clicks
 $("#addTrain").on("click", function(){
 	event.preventDefault();
 	// grab html value entered and store variable
  var trainName = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var nextArrival = $("#name-input").val().trim();
  var firstTrainTime = $("#first-train-time-input").val().trim();
  var minutesAway = $("#frequency-input").val().trim();


  /*new entry to firebase push/get??*/
  	database.ref().push({
  	trainName: trainName,
  	destination: destination,
  	frequency: frequency,
  	nextArrival: nextArrival,
  	firstTrain: firstTrainTime,
  	minutesAway: minutesAway,
  	timeAdded:firebase.database.ServerValue.TIMESTAMP});

 // onclick child function
 database.ref().on("child_added",function(childSnapshot){
 	console.log(childSnapshot.val());

 	var trainName = childSnapshot.val().trainName;
 	var destination = childSnapshot.val().destination;
 	var frequency = childSnapshot.val().frequency;
 	var firstTrain = childSnapshot.val().firstTrainTime;

 	console.log("trainName: "+ trainName);
 	console.log("destination: "+ destination);
 	console.log("firstTrain: "+ firstTrainTime);
 	console.log("frequency: "+ frequency);
 	console.log(moment().format("HH:mm"));

 	var frequency = parseInt(frequency);
 	var currentTime = moment();
 	console.log("current time: " + moment().format('HH:mm'));
 	//first time:pushed back 1year before current time..
 	var dConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years"); 
 	console.log("date converted: "+ dConverted);

 	var trainTime = moment(dConverted).format('HH:mm');
 	console.log("train time: " + trainTime);
 	// diff btn the times 
 	var tDifference = moment().diff(moment(tConverted),'minutes');
 	console.log("difference in time:" + tDifference);

 	// remainder
 	var tRemainder = tDifference % frequency;
 	console.log("time remaining: "+ tRemainder);
 	// min until next train CHECK VARIABLE ALREADY CALLED ABOVE?
 	minutesAway = frequency - tRemainder;
 	console.log("minutes until next train: " + minutesAway);

 	// next train
 	var nextTrain = moment().add(minutesAway, 'minutes');
 	console.log("arrival time: " + moment(nextTrain).format('HH:mm A'));

// append to display in train table
$("#currentTime").text(currentTime); 
$("#trainTable").append("<tr><td id='trainNameDisplay'>" + childSnapshot.val().trainName +
	"</td><td id='destinationDisplay'>" +childSnapshot.val().destination +
	"</td><td id='frequencyDisplay'>" + childSnapshot.val().frequency + 
	"</td><td id='nextTrainDisplay'>" +(moment(nextArrival).format("HH:mm")+ 
	"</td><td id='minutesAwayDisplay'>" + minutesAway + 'minutes until arrival' + "</td></tr>");

 
 function(errorObject)
 {console.log("read failed: " + errorObject.code)});

 database.ref().orderByChild("timeAdded").limitToLast(1).on("child_added",function(snapshot){
 	// html to reflect
 	$("#trainNameDisplay").html(snapshot.val().trainName);
 	$("#destinationDisplay").html(snapshot.val().destination);
 	$("#frequencyDisplay").html(snapshot.val().frequency);
 	$("#nextTrainDisplay").html(snapshot.val().nextArrival);

 });

 });



 



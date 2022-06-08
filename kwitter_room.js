
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDoq1MqVgWLCQjyQuyfU7NAux1XBwYnD_o",
      authDomain: "kwitter-55abf.firebaseapp.com",
      databaseURL: "https://kwitter-55abf-default-rtdb.firebaseio.com",
      projectId: "kwitter-55abf",
      storageBucket: "kwitter-55abf.appspot.com",
      messagingSenderId: "159060692023",
      appId: "1:159060692023:web:dc7858d7bc5f4097c903b2"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
  
      localStorage.setItem("room_name", room_name);
  
      window.location = "kwitter_page.html";
  }
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
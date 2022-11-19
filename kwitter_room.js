const firebaseConfig = {
      apiKey: "AIzaSyDxz7NjeywjpT7BKv9OMq6kjgKORr430gs",
      authDomain: "kwitter-8fcbb.firebaseapp.com",
      databaseURL: "https://kwitter-8fcbb-default-rtdb.firebaseio.com",
      projectId: "kwitter-8fcbb",
      storageBucket: "kwitter-8fcbb.appspot.com",
      messagingSenderId: "609611830186",
      appId: "1:609611830186:web:a6f2bd12eae4f3f89e11d3",
      measurementId: "G-SC2S2XV3J6"
};
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" +
                        Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      window.location.href = "index.html";
      localStorage.removeItem("Username");
}

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
}
//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
console.log(firebase_message_id);
console.log(message_data);
Name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+Name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn warning' id="+firebase_message_id+" value="+life+" onclick='updateLike(this.id)'>";
span_with_tag="span class='glyphicon glyphicon-thumbs-up'>Like:"+ like+" onclick='updateLike(this.id)'>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML +=row;
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      window.location.href = "index.html";
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
}

function send() {
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
}

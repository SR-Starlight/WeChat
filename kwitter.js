function login() {
    username=document.getElementById("username").value;
    localStorage.setItem("Username",username);
    window.location.href="kwitter_room.html";
}
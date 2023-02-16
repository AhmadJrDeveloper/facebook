// Retrieve the username from the query string
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

// Set the text content of the username element to the retrieved username
document.getElementById("username").textContent = username;

function back(){
    window.location="home.html";
}

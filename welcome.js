// Retrieve the username from the query string
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

// Set the text content of the username element to the retrieved username
document.getElementById("username").textContent = username;

function back(){
    window.location="home.html";
}
var mappingList = [];
function add(){
    var username = document.getElementById('nameAdd').value;
    var password = document.getElementById('passwordAdd').value;
    var entry = {name:username,password:password};
    
    if(username.toLowerCase()===password.toLowerCase()){
        mappingList.push(entry)

    

    alert('Dear  '+ username.toUpperCase()+" you have been added" );
    return;
    }
    else{
        alert('please enter the same username and password');
    }
}

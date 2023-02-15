function logIn(){
    var username = document.getElementById("Name").value;
    var Password = document.getElementById("Password").value; 
    

    
    
if( username.toLowerCase()==="admin" && Password.toLowerCase()==="admin"){
    window.location="Task.html";  

}

else{
    alert("wrong username or password");
    return;
}

}


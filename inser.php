<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "emps";
 // Create connection
 $connection = mysqli_connect($servername,  $username, $password, $dbname);

 // Check connection
 if ($connection->connect_error) {
   die("Connection failed: " . $connection->connect_error);
 }




$user = $_POST["name"];
$passwordd = $_POST["password"];
$query = "INSERT INTO emp (name,password)VALUES('$user',"$passwordd")";
$result = mysqli_query($connection,$query);
if($result)
header("home.html")
else
echo "error";

 mysqli_close($connection);

?>

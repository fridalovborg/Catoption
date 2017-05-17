<?php
$con = mysqli_connect('localhost','root','','catoptionDB');

// Check connection
if (mysqli_connect_errno()) {
	echo 'Ooops something is wrong, try figure this out: ' . mysqli_connect_error();
}

// Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();

$petCounter = 0;
?>
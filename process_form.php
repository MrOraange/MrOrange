<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $planet = $_POST["planet"];
    $galaxy = $_POST["galaxy"];
    $date = $_POST["date"];
    $sum = $_POST["sum"];

    // Perform any additional validation or processing here

    // Store the data in a file or database
    // For simplicity, let's store in a text file
    $data = "$name, $planet, $galaxy, $date, $sum\n";
    file_put_contents("form_data.txt", $data, FILE_APPEND);

    // Redirect the user or display a success message
    header("Location: success.html");
    exit();
}
?>
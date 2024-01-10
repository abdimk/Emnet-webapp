<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Add your email sending logic here
    $to = "abdisamk@gmail.com";
    $headers = "From: $email";

    // You can customize the message format as needed
    $mailBody = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

    // Use the mail() function to send the email
    mail($to, $subject, $mailBody, $headers);

    // You can add a success message or redirect the user to a thank-you page
    echo "Your message has been sent successfully!";
} else {
    // Redirect the user to the form page if they try to access this script directly
    header("Location: index.html");
    exit();
}
?>

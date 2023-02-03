<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = "floris@solidesoftware.nl";
  $subject = "Contact Form Submission solidesoftware.nl";
  $headers = "From: $email";
  mail($to,$subject,$message,$headers);
  header('Location: thank-you.html');
?>

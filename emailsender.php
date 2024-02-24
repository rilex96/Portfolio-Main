<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './creds.php';

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'mail.rilexwebdev.com';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->Username = $Username;
    $mail->Password = $Password;

    $mail->setFrom($email, $name);
    $mail->addAddress('rilexadmin@rilexwebdev.com', 'Rilex');

    $mail->Subject = "Nova poruka sa sajta od $name";
    $mail->Body = $message;

    $mail->send();
    header("Location: /#success");
    exit();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

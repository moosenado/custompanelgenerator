<?php

header("access-control-allow-origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

//form details
$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$phonenumber = $_POST['phonenumber'];
$notes = $_POST['notes'];

//panel details
$panel = $_POST['panel'];
$id = $_POST['id'];
$partname = $_POST['partname'];
$left = $_POST['left'];
$src = $_POST['src'];
$top = $_POST['top'];
$width = $_POST['width'];

//panel url
$panelurl = 'https://www.custompanel.dvtest.com/#/'.$panel.'/'.
			'?id='.$id.
			'&partname='.$partname.
			'&left='.$left.
			'&src='.$src.
			'&top='.$top.
			'&width='.$width.
			'&panel='.$panel;



//TESTFORCE EMAIL CREDS
$details = array(
  'Name: '.$name,
  'Email: '.$email,
  'Company: '.$company,
  'Phone Number: '.$phonenumber,
  'Notes: ',
  '',
  $notes,
  '',
  'Custom Panel URL: '.$panelurl
);
$details = implode( "\r\n", $details );

$mail_testforce = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail_testforce->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail_testforce->isSMTP();                                      // Set mailer to use SMTP
    $mail_testforce->Host = 'smtp.office365.com';  // Specify main and backup SMTP servers
    $mail_testforce->SMTPAuth = true;                               // Enable SMTP authentication
    $mail_testforce->Username = 'news@dvtest.com';                 // SMTP username
    $mail_testforce->Password = 'Testforce1!';                           // SMTP password
    $mail_testforce->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail_testforce->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail_testforce->setFrom('news@dvtest.com', 'I/O Panel Builder Form');
    $mail_testforce->addAddress('sales@dvtest.com', 'DVTEST Sales');     // Add a recipient
    $mail_testforce->addReplyTo($email, $name);
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Content
    $mail_testforce->isHTML(true);                                  // Set email format to HTML
    $mail_testforce->Subject = 'Quote Request';
    $mail_testforce->Body = '<img src="http://cdn.shopify.com/s/files/1/2264/6671/files/Artboard_1_compact.png" /><br><br><br>
            <h1 style="font-size: 20px;">Quote Request</h1>
            <p>DVTEST has received a quote request. Please see below for the needed information to complete the request.</p>

            <p><strong>Name:</strong> '.$name.'</p>
            <p><strong>Email:</strong> <a href="mailto:'.$email.'" target="_top">'.$email.'</p></a>
            <p><strong>Company:</strong> '.$company.'</p>
            <p><strong>Phone Number:</strong> '.$phonenumber.'</p>
            <p><strong>Notes:</strong> '.$notes.'</p><br>
            

        <a href="'.$panelurl.'">
            <div style="width:260px; height: 40px; background-color: black; color: white; text-align: center; line-height: 40px; border-radius: 5px; text-decoration: none !important;">
                VIEW THEIR CUSTOM I/O PANEL
            </div>
        </a>';

    $mail_testforce->send();
    echo 'Testforce Message has been sent';
} catch (Exception $e) {
    echo 'Testforce Message could not be sent.';
    echo 'Mailer Error: ' . $mail_testforce->ErrorInfo;
}




//CUSTOMER EMAIL CREDS
$customer_message = array(
  'Hello '.$name.',',
  '',
  'Thank you for your Quote Request from DVTEST Inc. Within the next 24 hours you can expect our response. If you have any questions about your quote request please contact us at support@dvtest.com or call us at (647) 726-0058 Monday - Friday, 8am - 5pm EST.',
  'Thank you again for your interest.',
  '',
  'View Your Custom Panel Here: '.$panelurl
);
$customer_message = implode( "\r\n", $customer_message );

$mail_customer = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail_customer->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail_customer->isSMTP();                                      // Set mailer to use SMTP
    $mail_customer->Host = 'smtp.office365.com';  // Specify main and backup SMTP servers
    $mail_customer->SMTPAuth = true;                               // Enable SMTP authentication
    $mail_customer->Username = 'news@dvtest.com';                 // SMTP username
    $mail_customer->Password = 'Testforce1!';                           // SMTP password
    $mail_customer->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail_customer->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail_customer->setFrom('news@dvtest.com', 'DVTEST I/O Panel Builder Form');
    $mail_customer->addAddress($email, $name);     // Add a recipient
    $mail_customer->addReplyTo('noreply@dvtest.com', 'No-Reply');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Content
    $mail_customer->isHTML(true);                                  // Set email format to HTML
    $mail_customer->Subject = 'Quote Request Receipt';
    $mail_customer->Body = '<img src="http://cdn.shopify.com/s/files/1/2264/6671/files/Artboard_1_compact.png" /><br><br>
            <h1 style="font-size: 20px;">DVTEST I/O Panel Quote Request Receipt</h1><br>
            <p>Hello '.$name.',</p>

            <p>Thank you for your Quote Request from DVTEST Inc. Within the next 24 hours you can expect our response. If you have any questions about your quote request please contact us at support@dvtest.com or call us at (647) 726-0058 Monday - Friday, 8am - 5pm EST.</p>
            <p>Thank you again for your interest.</p><br>

        <a href="'.$panelurl.'">
            <div style="width:350px; height: 40px; background-color: black; color: white; text-align: center; line-height: 40px; border-radius: 5px; text-decoration: none !important;">
                VIEW YOUR CUSTOM I/O PANEL SUBMISSION
            </div>
        </a>';

    $mail_customer->send();
    echo 'Customer Message has been sent';
} catch (Exception $e) {
    echo 'Customer Message could not be sent.';
    echo 'Mailer Error: ' . $mail_customer->ErrorInfo;
}
?>
<?php

$formOutput = "";
$from = "";
$message = "";
$email = "";
$name = "";
$err = "";

$namePat = "/^[a-z ,.'-]+$/i";
$emailPat = "/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/";

$validateArray = array();

echo 'YOIM HEREEEE';

// if(isset($_POST['submit'])){

// 	//require_once "Mail.php";

// 	$name = $_POST['name'];
// 	$email = $_POST['email'];
// 	$from = $name . ' ' . '<' . $email . '>';
// 	$message = $_POST['message'];

// 	if (empty($name) || empty($email) || empty($message)){
// 		$err .= "Those fields are empty!";

// 	}elseif(!preg_match($namePat, $name)){
// 		array_push($validateArray, "Is that really your name?");
		
// 	}elseif(!preg_match($emailPat, $email)){
// 		array_push($validateArray, "Check your email again.");
		
// 	}else{

// 	// $to = "egrabish@gmail.com";
// 	// $subject = "EG Form Submission";

// 	// $host = "ssl://mail.stem.arvixe.com";
// 	// $port = "465";
// 	// $username = "test@egrabishtest.com";
// 	// $password = "egrabishtest";

// 	// $headers = array ('From' => $from,
// 	// 	'To' => $to,
// 	// 	'Subject' => $subject);

// 	// $smtp = Mail::factory('smtp',
// 	// 	array ('host' => $host,
// 	// 		'port' => $port,
// 	// 		'auth' => true,
// 	// 		'username' => $username,
// 	// 		'password' => $password));

// 	// $body = $message;

// 	// $mail = $smtp->send($to, $headers, $body);
		
// 	$final_headers = $from;
	
// 	mail('egrabish@gmail.com', 'EG Form Submission', $message, $final_headers);

// 	$formOutput = "Thanks! I will be in touch soon.";

// 	}
// }
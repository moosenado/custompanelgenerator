<?php

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
$panelurl = 'http://moosenado.com/custompanel/#/'.$panel.'/'.
			'?id='.$id.
			'&partname='.$partname.
			'&left='.$left.
			'&src='.$src.
			'&top='.$top.
			'&width='.$width.
			'&panel='.$panel;

//setup email body details
$details = array(
  'Name: '.$name,
  'Email: '.$email,
  'Company: '.$company,
  'Phone Number: '.$phonenumber,
  'Notes: '.$notes,
  'Custom Panel URL: '.$panelurl
);
$details = implode( "\r\n", $details );

// $namePat = "/^[a-z ,.'-]+$/i";
// $emailPat = "/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/";

// email to testforce
$headers_testforce = array(
  'From: ' . $name . ' ' . '<' . $email . '>',
  'Reply-To: ' . $name . ' ' . '<' . $email . '>'
);
$headers_testforce = implode( "\r\n", $headers_testforce );
mail('egrabish@gmail.com', 'Testforce Email', $details, $headers_testforce);

// email to sender
$headers_user = "DV Test" . ' ' . '<' . 'sales@dvtest.com' . '>';
mail($email, 'Sender Email', 'We have received your custom panel quote. Thanks.', $headers_user);
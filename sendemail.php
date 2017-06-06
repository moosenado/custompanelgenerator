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
  'Notes: ',
  '',
  $notes,
  '',
  'Custom Panel URL: '.$panelurl
);
$details = implode( "\r\n", $details );

// email to testforce
$headers_testforce = array(
  'From: ' . $name . ' ' . '<' . $email . '>',
  'Reply-To: ' . $name . ' ' . '<' . $email . '>'
);
$headers_testforce = implode( "\r\n", $headers_testforce );
mail('egrabish@gmail.com', 'DVTEST Quote Request', $details, $headers_testforce);
//alexandra.aylott@testforce.com
$customer_message = array(
  'Hello '.$name.',',
  '',
  'Thank you for your Quote Request from DVTEST Inc. Within the next 24 hours you can expect our response. If you have any questions about your quote request please contact us at support@dvtest.com or call us at (647) 726-0058 Monday - Friday, 8am - 5pm EST.',
  'Thank you again for your interest.',
  '',
  'View Your Custom Panel Here: '.$panelurl
);
$customer_message = implode( "\r\n", $customer_message );

// email to sender
$headers_user = "DV Test" . ' ' . '<' . 'sales@dvtest.com' . '>';
mail($email, 'DVTEST Quote Request', $customer_message, $headers_user);
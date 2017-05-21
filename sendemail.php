<?php

$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$phonenumber = $_POST['phonenumber'];
$notes = $_POST['notes'];
$panel = $_POST['panel'];
$id = $_POST['id'];
$partname = $_POST['partname'];
$left = $_POST['left'];
$src = $_POST['src'];
$top = $_POST['top'];
$width = $_POST['width'];

$panelcreated = 'http://moosenado.com/custompanel/#/'.$panel.'/'.
				'?id='.$id.
				'&partname='.$partname.
				'&left='.$left.
				'&src='.$src.
				'&top='.$top.
				'&width='.$width.
				'&panel='.$panel;

$notes .=  "\r\n" . 'Panel URL: '.$panelcreated;

// $namePat = "/^[a-z ,.'-]+$/i";
// $emailPat = "/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/";
$headers_testforce = array(
  'From: ' . $name . ' ' . '<' . $email . '>',
  'Reply-To: ' . $name . ' ' . '<' . $email . '>'
);
$headers_testforce = implode( "\r\n" , $headers_testforce );
// email to testforce
mail('egrabish@gmail.com', 'Testforce Email', $notes, $headers_testforce);

$headers_user = "Testforce Systems Inc" . ' ' . '<' . 'sales@testforce.com' . '>';
// email to sender
mail($email, 'Sender Email', 'thanks for sending panel', $headers_user);
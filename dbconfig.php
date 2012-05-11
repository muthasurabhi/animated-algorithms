<?php
//error_reporting(0);
if(!isset($_SESSION)) 
{ 
 session_start(); 
}  
$dbhost="localhost"; 
$dbname="animation";
$dbuser="root";
$dbpass="";
mysql_connect($dbhost, $dbuser, $dbpass) or die("MySQL Error: " . mysql_error());
mysql_select_db($dbname) or die("MySQL Error: " . mysql_error());
?>
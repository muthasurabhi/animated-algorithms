<?php include_once("dbconfig.php");?>
<?php
$username=$_POST['username'];
$password=$_POST['password'];
$emailid=$_POST['email'];
$name=$_POST['name'];
$city=$_POST['city'];
$phone=$_POST['phone'];
$occupation=$_POST['occupation'];
$sq=$_POST['sq'];
$sa=$_POST['sa'];

//echo $username.$password.$emailid.$name.$city.$phone.$occupation.$sq.$sa;

$sql=mysql_query(" insert into info values('".$name."','".$emailid."','".$city."','".$phone."','".$occupation."','".$username."' )") or die(mysql_error());
if(strcmp($occupation,"student")==0)
$type=1;
else
$type=2;

$sql2=mysql_query("insert into login values('".$username."','".$password."','".$sq. "','".$sa. "','".$type."')");
?>
<html>
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
		<link rel="stylesheet" href="style.css" type="text/css" media="screen"/>
</head>
<body>
<div id="success">
<font size="5">
<br><br><br>
<p> You have been registered Succefully.</p>
<a href="index.php" > Click here to go to home page</a>
</font>
</div>
</body>
</html>
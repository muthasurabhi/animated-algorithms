<?php require_once('dbconfig.php'); ?>
<?php

//echo "hi";
$username = mysql_real_escape_string($_POST['username']);
$password = mysql_real_escape_string($_POST['password']);
 echo $username.$password;
 $checklogin = mysql_query("SELECT * FROM login WHERE username = '".$username."' AND password = '".$password."' ");
 
 if(mysql_num_rows($checklogin) ==1)
    {
		$row1=mysql_fetch_array($checklogin);
		echo "login successful";	
		$_SESSION['username']=$row1['username'];
		
		//to refresh page
		header("location:main.html");
		echo "<meta http-equiv='refresh' content='=0;main.html' />";
		
	}
	else
	{
		echo "wrong username or password";
	}
 ?>

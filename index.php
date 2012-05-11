<?php require_once('dbconfig.php'); ?>
<html>
	<head>  
		<!--meta tag to refresh-->
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
		<link rel="stylesheet" href="style.css" type="text/css" media="screen"/>
	</head>  
	<body>  
	<?php
		if(!empty($_SESSION['username']))
		{
		 header("location:main.html");
		 echo "<meta http-equiv='refresh' content='=0;main.html' />";
		}
		else
		{
	?>	
		<div id="main1">
			<!-- The top Most Patch -->
			<div>
				<frameset frameborder="yes" border="0px"> 
					<iframe scrolling="no" frameborder="0" name="top" src="top.html" width="100%" height="20%" style={margin-left: 0px;margin-top: 0px;}>
					</iframe>
				</frameset>

			<div id="main">
				<font face="Snap ITC">
					<h1>
					&nbsp;
					Member Login
					
					</h1>
   
					<br>
					<br>
					&nbsp;&nbsp;
					Thanks for visiting! Please either login below 
   
	<form method="post" action="login.php" name="loginform" id="loginform">
	<fieldset>
		<label for="username">&nbsp;Username:</label><input type="text" name="username" id="username" tabindex=1 /><br />
		<label for="password">&nbsp;Password:</label><input type="password" name="password" id="password" tabindex=2 />
		<a href="password_username.php" tabindex=4><font size= -2 color="blue" ><i>Forgot Password ?</i></font></a>
		
	<p align="right"  id="Register">
	<input type="submit" name="login" id="login" value="Login"  tabindex=3 style="font-family:'Snap ITC';font-size:120%; background-color:Transparent; width:100px; height:30px;" />
	
	&nbsp;click here to <a href="registration.html" tabindex=5 id="link">&nbsp;Register Now </a>.</p>
	</fieldset>
	</form>
	</font>
	</div>
	</div>
	<?php
	}
	?>
	</body>
</html>
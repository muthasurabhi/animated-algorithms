<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body background="Images/glass6.png">
<div id="top">
<table border="0" width="170%">
<tr>
<td width="20%">
<?php require_once('dbconfig.php'); ?>
<?php
$username = $_SESSION['username'];
$checklogin = mysql_query("SELECT * FROM login WHERE username = '".$username."' ");
$row1 = mysql_fetch_array($checklogin);
?>
<?php
echo "Hello"." ".$row1['username'];
?>
</td>

<td>
<font size="6">
	REAL TIME VISUALISATION OF ALGORITHMS
</font>
</td>

<td>
<font size="5">
<a href="logout.php" target="_parent"> Logout </a>
</font>
</td>

</table>
</div>
</body>
</html>
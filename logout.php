<?php include "dbconfig.php";?>
<?php
$_SESSION = array(); 
session_destroy(); 
?>
<meta http-equiv="refresh" target="_parent" content="0;index.php">
<?php
	$host 		= "localhost";
	$user 		= "root";
	$password 	= "apmsetup";

    $connect = mysql_connect($host, $user, $password);
	$db_status = mysql_select_db('hs', $connect);
	//mysql_query("set names utf8;");
	if(!$db_status) {
		die('접속 실패 : '.mysql_error());
	}
?>
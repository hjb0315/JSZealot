<?php
	session_start();
	//ini_set("display_errors", "1");
	include_once('../../common/db.php');

	if(!empty($_POST['id']) || !empty($_POST['password']) || !empty($_POST['name'])) {
		/*
		$ID = $_POST['id'];
		$PASSWORD = $_POST['password'];
		$NAME  = $_POST['name'];
		$EMAIL = $_POST['email'];
		*/
		$sql = 'INSERT INTO `member` (`id`, `password`, `name`, `email`) 
					VALUES (\'' . mysql_real_escape_string($_POST['id']) . '\', 
							\'' . mysql_real_escape_string($_POST['password']) . '\',
							\'' . mysql_real_escape_string($_POST['name']) . '\',
							\'' . mysql_real_escape_string($_POST['email']) . '\')';
		$result = mysql_query($sql);
		if (!$result) {
			$message = '오류: ' . mysql_error() . "\n";
			$message .= '쿼리: ' . $sql;
			die($message);
		}
		$_SESSION['nickname'] = $_POST['name'];
		$_SESSION['id'] = $_POST['id'];
		$_SESSION['is_login'] = true;
		
		header('location: ../../index.php');
	}
	
	header('location: ../../index.php');
?>
	

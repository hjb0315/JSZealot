<?php
	session_start();
	@extract($_POST);
	include_once('../member/callDatabase.php');
	$Rewrite_Board_information = "update board set writeDay = now(),content = '$write', title='$title' where seq =$_SESSION[seq]";
	mysql_query($Rewrite_Board_information);
	echo "<script>location.href='board.html'</script>";
	exit;

?>
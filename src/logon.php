<?php
	header('content-type:text/html;charset=utf8');
	$connect = mysqli_connect('localhost','root','root','info',3306);
	if(mysqli_connect_error($connect)){
		dir('数据库连接失败');
	}
	$name = $_REQUEST['username'];
	$pw = $_REQUEST['userpw'];
	$spl2 = "insert into user (name,password) values ( '$name','$pw')";
	//执行SQL代码
	$result = mysqli_query($connect,$spl2);
	echo '注册成功'
?>
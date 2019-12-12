<?php
	header('content-type:text/html;charset=utf8');
	$connect = mysqli_connect('localhost','root','root','info',3306);
	if(mysqli_connect_error($connect)){
		dir('数据库连接失败');
	}
	$name = $_REQUEST['username'];
		$pw = $_REQUEST['userpw'];
		$spl2 = "SELECT * FROM user where name = '$name' and password = '$pw'";
		//执行SQL代码
		$result = mysqli_query($connect,$spl2);
		$rows= mysqli_num_rows($result);
		//echo $name;
		//echo $rows;
		if($rows>0){
			echo '登录成功';
		}else{
			echo '用户名或密码错误';
		}
?>
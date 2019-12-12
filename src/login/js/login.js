$(function(){
	$('.inp-btn').on('click',function(){
		var username = $('.inp-txt').val()
		var userpw = $('.inp-pw').val()
		console.log(username)
		$.ajax({
			url:"../login.php",
			data:{
				username:username,
				userpw:userpw,
			},
			success:function(data){
				if(data =='登录成功'){
					$('body').html(data)
					localStorage.setItem('username',username)
					setTimeout(function(){
						window.open('http://localhost/src/')
					},1500)
				}else{
					alert(data)
				}
			}
		})


	})

})
$(function(){
	$('.inp-btn').on('click',function(){
		var username = $('.inp-txt').val()
		var userpw = $('.inp-pw').val()
		$.ajax({
			url:"../logon.php",
			data:{
				username:username,
				userpw:userpw,
			},
			success:function(data){
				$('body').html(data)
				setTimeout(function(){
					window.open('http://localhost/src/')
				},1500)
			}
		})


	})

})
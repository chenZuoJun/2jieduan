$(function(){$(".inp-btn").on("click",function(){var t=$(".inp-txt").val(),n=$(".inp-pw").val();console.log(t),$.ajax({url:"../login.php",data:{username:t,userpw:n},success:function(n){"登录成功"==n?($("body").html(n),localStorage.setItem("username",t),setTimeout(function(){window.open("http://localhost/dist/")},1500)):alert(n)}})})});
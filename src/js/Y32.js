$(function(){
	//头部
	$('.bar-right-2li').on('mouseenter',function(){
		$('.bar-right-2li').css({background:'white'})
		$('.bar-right-2li>a,.bar-right-2li>a i').css({color:"black"})
		$('#bar-right-2').css({display: "block"})
	})
	
	$('.bar-right-2li').on('mouseleave',function(){
		$('.bar-right-2li').css({background:"#333",height:'40px'})
		$('.bar-right-2li>a,.bar-right-2li>a i').css({color:"white"})
		$('#bar-right-2').css({display: "none"})
	})
	
	$('.bar-right-3li').on('mouseenter',function(){
		$('.bar-right-3li').css({background:'white'})
		$('.bar-right-3li>a,.bar-right-3li>a i').css({color:"black"})
		$('#bar-right-3').css({display: "block"})
	})
	
	$('.bar-right-3li').on('mouseleave',function(){
		$('.bar-right-3li').css({background:"#333",height:'40px'})
		$('.bar-right-3li>a,.bar-right-3li>a i').css({color:"white"})
		$('#bar-right-3').css({display: "none"})
	})
	
	$('.bar-right-4li').on('mouseenter',function(){
		$('.bar-right-4li').css({background:'white'})
		$('.bar-right-4li>a,.bar-right-4li>a i').css({color:"black"})
		$('#bar-right-4').css({display: "block"})
		$('#bar-right-5').css({display: "block"})
	})
	$('.bar-right-4li').on('mouseleave',function(){
		$('.bar-right-4li').css({background:"#333"})
		$('.bar-right-4li>a,.bar-right-4li>a i').css({color:"white"})
		$('#bar-right-4').css({display: "none"})
		$('#bar-right-5').css({display: "none"})
	})
	
	//分类
	$('.feilei-01').on('mouseenter',function(){
		$('.feilei-ul').css({display: "block"})
	})
	$('.feilei-01').on('mouseleave',function(){
		$('.feilei-ul').css({display: "none"})
	})
	$('.feilei-ul').on('mouseenter',function(){
		$('.feilei-ul').css({display: "block"})
	})
	$('.feilei-ul').on('mouseleave',function(){
		$('.feilei-ul').css({display: "none"})
	})
	
	//放大镜
	$('.big-img').on('mouseenter',function(){
		$('.mast').css({display:'block'})
		$('.fdj').css({display:'block'})
		
		$('.big-img').on('mousemove',function(e){
			var X = e.pageX - $(this).offset().left-122;
			var Y = e.pageY - $(this).offset().top-122;
			
			if(X<0){
				X=0
			}
			if(Y<0){
				Y=0
			}
			if(X>224){
				X=224
			}
			if(Y>224){
				Y=224
			}
			var fdjImgX = -Math.floor(X/448*800 )+'px'
			var fdjImgY = -Math.floor(Y/448*800 )+'px'
			X = X+'px'
			Y = Y+'px'
			$('.mast').css({top:Y,left:X})
			$('.fdj-img').css({top:fdjImgY,left:fdjImgX})
		})
		$('.big-img').on('mouseleave',function(){
			$('.mast').css({display:'none'})
			$('.fdj').css({display:'none'})
		})
	})
})
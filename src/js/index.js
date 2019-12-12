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
	if(localStorage.username){
		$('#bar-left>ul>li:nth-child(2)>a:nth-child(1)').html(localStorage.username)
		$('#bar-left>ul>li:nth-child(2)>a:nth-of-type(2)').html('退出')
	}
	//购物车
		//console.log($('#bar-left').width())
	//轮播图
	 var mySwiper = new Swiper ('.swiper-container', {
	    autoplay:true,
	    loop: true, // 循环模式选项
	    // 如果需要分页器
	    pagination:{
	      el: '.swiper-pagination',
		  type: 'custom',
		  renderCustom: function (swiper, current, total) {
		  					var paginationHtml = " ";
		  					for (var i = 0; i < total; i++) {
		  						// 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
		  						if (i === (current - 1)) {
		  							paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active" index='+i+'></span>';
		  						}else{
		  							paginationHtml += '<span class="swiper-pagination-customs" index='+i+'></span>';
		  						}						  
		  					}
		  					return paginationHtml;
		  				},
	    },
	    
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  })
	$('.swiper-pagination').on('click','span',function(){
	var index = Number($(this).attr('index'))+1
	mySwiper.slideTo(index, 500, false);//切换到第一个slide，速度为1秒
	
	 })
	 //nav
	 $('#nav-inner>ul>li').on('mouseenter',function(){
	 	$(this).css({background:'#2884c7'})
	 	$(".menu-content-wrap").css({display:"block"})
	 })
	 $('#nav-inner>ul>li').on('mouseleave',function(){
	 	$(this).css({background:'rgba(50,47,44,0)'})
	 	$(".menu-content-wrap").css({display:"none"})
	 })
	 
	 $('.menu-content-wrap').on('mouseenter',function(){
	 	$(".menu-content-wrap").css({display:"block"})
	 })
	 $('.menu-content-wrap').on('mouseleave',function(){
	 	$(".menu-content-wrap").css({display:"none"})
	 })
	 
	 //超级电视
	 $('.superTV-list>ul>li').on('mouseenter',function(){
		$(this).find(".price").css({display:"none"})
	 	$(this).find(".superTV-buybox").animate({top:"320px"},500)
		$(this).find(".shop-img>a>img").animate({width:"101%",height:"101%"},500)
	  })
	$('.superTV-list>ul>li').on('mouseleave',function(){
		$(this).find(".superTV-buybox").animate({top:"372px"},500)
		 $(this).find(".price").css({display:"block"})
		 $(this).find(".shop-img>a>img").animate({width:"100%",height:"100%"},500)
	})
	
	// 配件
	$('.peijian-list>ul>li').on('mouseenter',function(){
		 $(this).find(".price").css({display:"none"})
	 	$(this).find(".peijian-buybox").animate({top:"248px"},500)
		$(this).find(".shop-img>a>img").animate({width:"101%",height:"101%"},500)
	  })
	$('.peijian-list>ul>li').on('mouseleave',function(){
		$(this).find(".peijian-buybox").animate({top:"298px"},500)
		 $(this).find(".price").css({display:"block"})
		 $(this).find(".shop-img>a>img").animate({width:"100%",height:"100%"},500)
	})		
})


$(function(){$(".bar-right-2li").on("mouseenter",function(){$(".bar-right-2li").css({background:"white"}),$(".bar-right-2li>a,.bar-right-2li>a i").css({color:"black"}),$("#bar-right-2").css({display:"block"})}),$(".bar-right-2li").on("mouseleave",function(){$(".bar-right-2li").css({background:"#333",height:"40px"}),$(".bar-right-2li>a,.bar-right-2li>a i").css({color:"white"}),$("#bar-right-2").css({display:"none"})}),$(".bar-right-3li").on("mouseenter",function(){$(".bar-right-3li").css({background:"white"}),$(".bar-right-3li>a,.bar-right-3li>a i").css({color:"black"}),$("#bar-right-3").css({display:"block"})}),$(".bar-right-3li").on("mouseleave",function(){$(".bar-right-3li").css({background:"#333",height:"40px"}),$(".bar-right-3li>a,.bar-right-3li>a i").css({color:"white"}),$("#bar-right-3").css({display:"none"})}),$(".bar-right-4li").on("mouseenter",function(){$(".bar-right-4li").css({background:"white"}),$(".bar-right-4li>a,.bar-right-4li>a i").css({color:"black"}),$("#bar-right-4").css({display:"block"}),$("#bar-right-5").css({display:"block"})}),$(".bar-right-4li").on("mouseleave",function(){$(".bar-right-4li").css({background:"#333"}),$(".bar-right-4li>a,.bar-right-4li>a i").css({color:"white"}),$("#bar-right-4").css({display:"none"}),$("#bar-right-5").css({display:"none"})}),$(".feilei-01").on("mouseenter",function(){$(".feilei-ul").css({display:"block"})}),$(".feilei-01").on("mouseleave",function(){$(".feilei-ul").css({display:"none"})}),$(".feilei-ul").on("mouseenter",function(){$(".feilei-ul").css({display:"block"})}),$(".feilei-ul").on("mouseleave",function(){$(".feilei-ul").css({display:"none"})}),$(".big-img").on("mouseenter",function(){$(".mast").css({display:"block"}),$(".fdj").css({display:"block"}),$(".big-img").on("mousemove",function(i){var s=i.pageX-$(this).offset().left-122,r=i.pageY-$(this).offset().top-122;s<0&&(s=0),r<0&&(r=0),224<s&&(s=224),224<r&&(r=224);var a=-Math.floor(s/448*800)+"px",o=-Math.floor(r/448*800)+"px";s+="px",r+="px",$(".mast").css({top:r,left:s}),$(".fdj-img").css({top:o,left:a})}),$(".big-img").on("mouseleave",function(){$(".mast").css({display:"none"}),$(".fdj").css({display:"none"})})})});
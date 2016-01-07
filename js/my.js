$(document).ready(function() {
			/*搜索*/
	$(".search input").focus(function(event) {
		if($(this).val()=="查询值")
		{
		$(this).val("").css("color","#333");
	}
	});
	$(".search input").blur(function(event) {
		if($(this).val()=="")
		{$ (this).val("查询值").css("color","#c2c2c2")
			}
	});
	/*用户名*/
	$(".dl input").focus(function(event) {
		if($(this).val()=="请输入...")
		{
		$(this).val("").css("color","#333");
	}
	});
	$(".dl input").blur(function(event) {
		if($(this).val()=="")
		{$ (this).val("请输入...").css("color","#c2c2c2")
			}
	});
	/*轮播图切换*/
	$(".left,.right").fadeTo(0,0.5);
		$(".banner ul li:first").clone().appendTo(".banner ul");
		$key=0;
		$circle=0;
		$(".right").click(function(event) {
			autoplay();
		});
		$(".right").hover(function() {
			$(".right").fadeTo(0,0.9);
		}, function() {
			$(".right").fadeTo(0,0.5);
		});
		$(".left").click(function(event) {
			$key--;
			if($key<0)
			{
				$key=$(".banner ul li").length-2;
				$(".banner ul").css("left",-($(".banner ul li").
					length-1)
					*$(".banner ul li").width());
			}
			$(".banner ul").animate({"left":-$key*$(".banner ul li").width()}, 300);
			$circle--;
			if($circle<0)
			{
				$circle=$(".banner ol li").length-1;
			}
			$(".banner ol li").eq($circle).
			addClass("current").siblings().removeClass("current");
		});
		$(".left").hover(function() {
			$(".left").fadeTo(0,0.9);
		}, function() {
			$(".left").fadeTo(0,0.5);
		});
		 $(".banner ol li").click(function(event) {
       		$key=$(this).index();
       		$circle=$(this).index();
       	    $(this).addClass("current").siblings().
       	    removeClass('current');
       	    $(".banner ul").stop().animate({"left":
       	    	-$key*$(".banner ul li").width()},300);
       });
		 var timer=setInterval(autoplay,3000)
		 function autoplay(){
		 	$key++;
			if($key>$(".banner ul li").length-1)
			{
				$key=1
				$(".banner ul").css("left",0);
			}
			$(".banner ul").animate({"left":-$key*$
				(".banner ul li").width()}, 300);
			$circle++;
			if($circle>$(".banner ol li").length-1)
			{
				$circle=0;
			}
			$("ol li").eq($circle).addClass("current").
			siblings().removeClass("current");
		 }
		 $(".banner").hover(function() {
		 		clearInterval(timer);
      	   		timer=null; 
      	   		
		 }, function() {
		 		clearInterval(timer);
      	   	timer=setInterval(autoplay, 3000);
		 });
		 /*详情列表*/
		 $(".news li").hover(function() {
		 	$(this).children("span").animate({"bottom":
		 		0}, 500);
		 }, function() {
		 	$(this).children("span").animate({"bottom":
		 		"-35px"}, 500)
		 });
		 /*返回顶部*/
		 $(window).scroll(function(event) {
			var H=$(document).scrollTop();
			if (H>50) 
			{
			
				$(".back").stop().fadeIn(800);
			}
			else
			{
				$(".back").stop().fadeOut(500);
			}
		});
		 $(".back").click(function(event) {
		 $(document).scrollTop(0);
		 });

});

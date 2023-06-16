$(document).ready(function(){
	
	// 首页
	$(".navbar-more").click(function(){
		
		// $(".navbar-more").toggleClass("navbar-open");
		
		if($(".navbar-more").is(".navbar-open")){
			$(".navbar-more").removeClass("navbar-open");
			// $(".navbar-more").addClass("navbar-close");
			// 取消遮罩
			$(".mask").hide(200,function(){
				$(".navbar-mobile").animate({opacity:'0'},200)
			});
			$("body").css({"overflow":"scroll"});
		}else{
			$(".navbar-more").addClass("navbar-open");
			// 打开遮罩
			$(".mask").show(200,function(){
				$(".navbar-mobile").animate({opacity:'1'},200)
			});
			$("body").css({"overflow":"hidden"});
		};
		
	});
	
	// 窗口大小发生改变时触发
	$(window).resize(function(){
		var win_Width = $(document).width();
		if(win_Width >= "768"){
			$("body").css({"overflow":"scroll"});
			$(".navbar-more").removeClass("navbar-open");
			// 取消遮罩
			$(".mask").hide(200);			
		}
	});
	
	// 展开移动端二级菜单-设置
	$(".navbar-mobile-set-btn").click(function(){
		$(".navbar-mobile-set").toggle(500);
	});
	
	// 获取get图片链接

	$(function () {

		//方法二：
		(function ($) {
			$.getUrlParam = function (name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]); return null;
			}
		})(jQuery);

		//方法二：
		var xx = $.getUrlParam('src');
		
		$(".details-main img").attr ("src",xx);

	});	
  
});


// 开启夜间模式

var modenight = document.getElementById("modenight");
var modeoo = document.getElementById("modeoo");

function night(){
	
	// 利用cookie缓存一个数值在电脑
	// document.cookie="mode=night; path=/";
	// var mode = document.cookie.slice(5);
	
	localStorage.setItem("mode", "night");
	var mode = localStorage.getItem("mode");
	
	
	if(mode == 'night'){
		
		alert('已开启深色模式')
		document.documentElement.style.setProperty('--bg-color', "#121212")
		document.documentElement.style.setProperty('--dark-gray', "#ffffff")
		document.documentElement.style.setProperty('--bg-fff', "#1d1d1d")
		document.documentElement.style.setProperty('--color000', "#ffffff")
		modenight.style.setProperty('display', "none")
		modeoo.style.setProperty('display', "block")
		
		// var str="<span onclick='daytime()'>日间模式</span>";
		// var x = document.getElementById("modespan");
		// x.innerHTML=str;
				
	}else{
		
	}


}

var mode = localStorage.getItem("mode");
if(mode == 'night'){
	document.documentElement.style.setProperty('--bg-color', "#121212")
	document.documentElement.style.setProperty('--dark-gray', "#ffffff")
	document.documentElement.style.setProperty('--bg-fff', "#1d1d1d")
	document.documentElement.style.setProperty('--color000', "#ffffff")
	
	modenight.style.setProperty('display', "none")
	modeoo.style.setProperty('display', "block")
	
	// var str="<span onclick='daytime()'>日间模式</span>";
	// var x = document.getElementById("modespan");
	// x.innerHTML=str;
	
}else{
	
}
	
function oo(){
	
	// 利用cookie缓存一个数值在电脑
	// document.cookie="mode=daytime; path=/";
	// var mode = document.cookie.slice(5);
	
	localStorage.removeItem("mode");
	// var ttt = localStorage.getItem("mode");
	alert('已关闭深色模式')

	document.documentElement.style.setProperty('--bg-color', "#ECF1F7")	
	document.documentElement.style.setProperty('--dark-gray', "#383838")
	document.documentElement.style.setProperty('--bg-fff', "#ffffff")
	document.documentElement.style.setProperty('--color000', "#000000")		
	
	modenight.style.setProperty('display', "block")
	modeoo.style.setProperty('display', "none")
	
	// if(mode == null){
	// 	var str="<span onclick='night()'>夜间模式</span>";
	// 	var x = document.getElementById("modespan");
	// 	x.innerHTML=str;
	// 	alert('暂未开放')
	// }
}
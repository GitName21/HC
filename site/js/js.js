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
		(function ($) {
			$.getUrlParam = function (name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]); return null;
			}
		})(jQuery);
		var imgsrc = $.getUrlParam('src');
		$(".details-main img").attr ("src",imgsrc);
	});	
  
	// 移动端固定按钮
	$(window).scroll(function () {
		var top = $(window).scrollTop();//获取body滚动距离
		var topheight = $('.navbar-box').outerHeight();//获取body滚动距离
		if(top >= topheight){                 //如果达到某个值
			//将元素的position属性置为absolute
			$(".fixed-btn").show(500);
		}else {
			$(".fixed-btn").hide(500);
		}
	});
	
	// 留言判断
	// $(".comment-box").click(function(){
	// 	 $(".comment-sub").css("background","red");
	// 	})
	$('.comment-text').click(function(){
		if($('.comment-text').val() == '请输入你要留下的内容:'){
			$('.comment-text').val('')
			return false;
		}
		if($('.comment-text').val() == '内容不能为空！'){
			$('.comment-text').val('');
			return false;
		}		
	})	
	$('.comment-text').blur(function(){
		if ($('.comment-text').val() != '' && $('.comment-text').val() != '请输入你要留下的内容:' && $('.comment-text').val() != '内容不能为空！'){
			$(".comment-sub").css({"background-color":"#0077FF","transition":"all 0.5s"});
		}else{
			$('.comment-text').val('内容不能为空！');
			return false;
		}
	})
  
});


// 开启夜间模式

var modenight = document.getElementById("modenight");
var modeoo = document.getElementById("modeoo");
var itemtxtnight = document.getElementById("item-txt-night")
var itemtxtdaytime = document.getElementById("item-txt-daytime")
var menucheckbox = document.getElementById("menu-checkbox")
// var fixedbtn = document.getElementsByClassName("fixed-btn")

function night(){
	
	// 利用cookie缓存一个数值在电脑
	// document.cookie="mode=night; path=/";
	// var mode = document.cookie.slice(5);
	
	localStorage.setItem("mode", "night");
	var mode = localStorage.getItem("mode");
	
	
	if(mode == 'night'){
		document.getElementsByTagName("body")[0].setAttribute("style","transition:var(--transitionTime05)");		
		document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:var(--transitionTime05)");
		document.documentElement.style.setProperty('--bg-color', "#121212");
		document.documentElement.style.setProperty('--dark-gray', "#ffffff");
		document.documentElement.style.setProperty('--bg-fff', "#1d1d1d");
		document.documentElement.style.setProperty('--color000', "#ffffff");
		
		// alert('已开启深色模式');
		
		modenight.style.setProperty('display', "none");
		modeoo.style.setProperty('display', "flex");
		itemtxtnight.style.setProperty('display', "none");
		itemtxtdaytime.style.setProperty('display', "flex");
		menucheckbox.checked = !(menucheckbox.checked );
		
		// var str="<span onclick='daytime()'>日间模式</span>";
		// var x = document.getElementById("modespan");
		// x.innerHTML=str;
				
	}else{
		
	}


}

// 保持夜间模式
var mode = localStorage.getItem("mode");
if(mode == 'night'){
	
	document.getElementsByTagName("body")[0].setAttribute("style","transition:0s");
	document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:0s");
	document.documentElement.style.setProperty('--bg-color', "#121212");
	document.documentElement.style.setProperty('--dark-gray', "#ffffff");
	document.documentElement.style.setProperty('--bg-fff', "#1d1d1d");
	document.documentElement.style.setProperty('--color000', "#ffffff");
	
	modenight.style.setProperty('display', "none");
	modeoo.style.setProperty('display', "flex");
	itemtxtnight.style.setProperty('display', "none");
	itemtxtdaytime.style.setProperty('display', "flex");
	
	// var str="<span onclick='daytime()'>日间模式</span>";
	// var x = document.getElementById("modespan");
	// x.innerHTML=str;
	
}

// 关闭夜间模式
function daytime(){
	
	// 利用cookie缓存一个数值在电脑
	// document.cookie="mode=daytime; path=/";
	// var mode = document.cookie.slice(5);
	
	localStorage.removeItem("mode");
	// var ttt = localStorage.getItem("mode");
	document.getElementsByTagName("body")[0].setAttribute("style","transition:var(--transitionTime05)");
	document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:var(--transitionTime05)");
	document.documentElement.style.setProperty('--bg-color', "#ECF1F7");
	document.documentElement.style.setProperty('--dark-gray', "#383838");
	document.documentElement.style.setProperty('--bg-fff', "#ffffff");
	document.documentElement.style.setProperty('--color000', "#000000");
	
	// alert('已关闭深色模式');
	
	modenight.style.setProperty('display', "flex");
	modeoo.style.setProperty('display', "none");
	itemtxtnight.style.setProperty('display', "flex");
	itemtxtdaytime.style.setProperty('display', "none");
	menucheckbox.checked = !(menucheckbox.checked )
	
	// if(mode == null){
	// 	var str="<span onclick='night()'>夜间模式</span>";
	// 	var x = document.getElementById("modespan");
	// 	x.innerHTML=str;
	// 	alert('暂未开放')
	// }
}
// 在其他标签页开启深色或浅色模式时，自动同步其它窗口
document.addEventListener("visibilitychange", function () {
	if (!document.hidden) {  
		// 处于当前页面
		// 同步开启
		var mode = localStorage.getItem("mode");
		if(mode == 'night'){
			
			document.getElementsByTagName("body")[0].setAttribute("style","transition:0s");
			document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:0s");
			document.documentElement.style.setProperty('--bg-color', "#121212");
			document.documentElement.style.setProperty('--dark-gray', "#ffffff");
			document.documentElement.style.setProperty('--bg-fff', "#1d1d1d");
			document.documentElement.style.setProperty('--color000', "#ffffff");
			
			modenight.style.setProperty('display', "none");
			modeoo.style.setProperty('display', "flex");
			
		};
		if(mode != 'night'){
			document.getElementsByTagName("body")[0].setAttribute("style","transition:0s");
			document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:0s");
			document.documentElement.style.setProperty('--bg-color', "#ECF1F7");
			document.documentElement.style.setProperty('--dark-gray', "#383838");
			document.documentElement.style.setProperty('--bg-fff', "#ffffff");
			document.documentElement.style.setProperty('--color000', "#000000");
			
			modenight.style.setProperty('display', "flex");
			modeoo.style.setProperty('display', "none");
		itemtxtnight.style.setProperty('display', "none");
		itemtxtdaytime.style.setProperty('display', "flex");
		}
	}
});

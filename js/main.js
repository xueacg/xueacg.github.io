/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$(function() {
	$(".header").after('<div id="m-nav" class="m-nav"><div class="m-wrap"></div><div id="m-btn" class="m-btn"><i class="fa fa-remove"></i></div>');
	$(".sub-menu").before('<em class="dot"><i class="fa fa-angle-down"></i></em>');
	$(".container .nav").clone(false).appendTo(".m-wrap");
	$(".m-btn").click(function() {
		$("#m-nav").toggleClass("m-open").siblings("#m-nav").removeClass("m-open");
		$("#mask").slideToggle(0).siblings("#mask").slideToggle(0);
		$("body").toggleClass("open").siblings("body").removeClass("open")
	});
	$(".dot").click(function(G) {
		f($(this), ".ul-subcates");
		G.stopPropagation()
	});
	function f(f, G) {
		f.next().slideToggle();
		f.parent().siblings().find(".fa").removeClass("open");
		f.parent().siblings().find(G).slideUp();
		var b = f.find(".fa");
		if (b.hasClass("open")) {
			b.removeClass("open")
		} else {
			b.addClass("open")
		}
	}
	$(".nav-bar li").hover(function() {
		$(this).addClass("on")
	},
	function() {
		$(this).removeClass("on")
	});
	$(".s-btn").on("click",
	function() {
		var f = $(this);
		if (f.hasClass("off")) {
			f.removeClass("fa-search off").addClass("fa-remove no");
			$(".s-form").slideToggle(200)
		} else {
			f.removeClass("fa-remove no").addClass("fa-search off");
			$(".s-form").slideToggle(100)
		}
	});
	$("#mask").click(function() {
		$(this).hide();
		$(".search-bg").hide();
		$("#m-nav").removeClass("m-open");
		$("body").removeClass("open")
	})
});


$(function(){
	var s = document.location;
	$(".nav-bar a").each(function() {
		if (this.href == s.toString().split("#")[0]) {
			$(this).addClass("active");
			return false;
		}
	});
});

$(function(){$(window).scroll(function(){var f=$(window).scrollTop();if(f>1){$("#backtop").fadeIn().css({bottom:"170px"});$("#quick_submit").fadeIn().css({bottom:"220px"})}else{$("#backtop").fadeOut();$("#quick_submit").fadeOut()}});$("#backtop").click(function(){$("html, body").animate({scrollTop:0},300);$(this).animate({bottom:"1500px"},500)})});
$(document).ready(function(){var f=document.location;$("#divNavBar a").each(function(){if(this.href==f.toString().split("#")[0]){$(this).addClass("on");return false}})})

/*!* jquery.tooltip.js 0.0.1 - https://github.com/yckart/jquery.tooltip.js*/
;(function(f,G,b){var T="tooltip",fO={fade:false,fallback:"",align:"autoTop",html:false,attr:"title",trigger:{show:"ontouchend"in b?"touchstart":"mouseenter",hide:"ontouchend"in b?"touchend":"mouseleave"},delay:{show:0,hide:0}};function d(T,d){d=f.extend({},fO,d);var V=f(T),a;V.on("tooltip:show "+d.trigger.show,function(){f.data(this,"cancel.tooltip",true);var T=f.data(this,"active.tooltip");if(!T){T=f('<div class="tooltip"><div class="tooltip-inner"/></div>').css({position:"absolute",zIndex:1e5});f.data(this,"active.tooltip",T)}if(V.attr("title")||typeof V.attr("original-title")!=="string"){V.attr("original-title",V.attr("title")||"").removeAttr("title")}var fO;if(typeof d.attr==="string"){fO=V.attr(d.attr==="title"?"original-title":d.attr)}else{if(typeof d.attr=="function"){fO=d.attr.call(this)}}T.find(".tooltip-inner")[d.html?"html":"text"](fO||d.fallback);var K=f.extend({},V.offset(),{width:this.offsetWidth,height:this.offsetHeight});T[0].className="tooltip";T.remove().css({top:0,left:0,opacity:0}).appendTo(b.body);var c=T[0].offsetWidth,N=T[0].offsetHeight,aQ=d.align==="autoTop"?K.top>f(b).scrollTop()+f(G).height()/2?"t":"b":K.left>f(b).scrollLeft()+f(G).width()/2?"l":"r";switch(d.align.charAt(0)==="a"?aQ:d.align.charAt(0)){case"b":T.css({top:K.top+K.height,left:K.left+K.width/2-c/2}).addClass("tooltip-bottom");break;case"t":T.css({top:K.top-N,left:K.left+K.width/2-c/2}).addClass("tooltip-top");break;case"l":T.css({top:K.top+K.height/2-N/2,left:K.left-c}).addClass("tooltip-left");break;case"r":T.css({top:K.top+K.height/2-N/2,left:K.left+K.width}).addClass("tooltip-right");break}clearTimeout(a);T.stop().delay(d.delay.show).fadeTo(d.fade?d.fade.duration:0,d.fade.opacity||.8,d.fade.complete)});V.on("tooltip:hide "+d.trigger.hide,function(){f.data(this,"cancel.tooltip",false);var G=this;a=setTimeout(function(){if(f.data(G,"cancel.tooltip")){return}var b=f.data(G,"active.tooltip");if(d.fade){b.stop().fadeTo(d.fade.duration,0,function(){b.remove();if(d.fade.complete){d.fade.complete(true)}})}else{b.remove()}},d.delay.hide)})}f.fn[T]=function(G){return this.each(function(){if(!f.data(this,"plugin_"+T)){f.data(this,"plugin_"+T,new d(this,G))}})}})(jQuery,window,document);

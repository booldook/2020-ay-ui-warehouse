$(".navi").mouseenter(function(){
	$(this).find(".sub-wrap").css({"opacity": 0, "display": "flex"});
	$(this).find(".sub-wrap").stop().animate({"opacity": 1, "top": "40px"}, 500);
});
$(".navi").mouseleave(function(){
	$(this).find(".sub-wrap").stop().animate({"opacity": 0, "top": "100px"}, 500,
	function(){
		$(this).css({"opacity": 0, "display": "none"});
	});
});
/* .prd를 변수에 넣기 */
var $prd = $(".prd");
var last = $prd.length - 1; //10 (11개 그림의 마지막 Index)


/* 초기화 */
var now = 0;
init(now);
function init(st) {
	$(".prd").remove();
	$(".prd-wrap").css({"left": "-25%"});
	for(var i=st, k; i<st+6; i++) {
		if(i > last) k = i - last - 1;
		else k = i;
		$(".prd-wrap").append($prd[k]);
	}
}

function ani() {
	$(".prd-wrap").stop().animate({"left": "-50%"}, 500, function(){
		if(now < last) now++;
		else now = 0;
		init(now);
	});
}

interval = setInterval(ani, 1000);
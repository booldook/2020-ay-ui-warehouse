/* .prd를 변수에 넣기 */
var $prd = $(".prd");
var last = $prd.length - 1; //10 (11개 그림의 마지막 Index)

/* 초기화 */
var now = last;
var dir = "P"; // P => target: 0, L => -50%
init();
function init() {
	$(".prd").remove();
	$(".prd-wrap").css({"left": "-25%"});
	for(var i=now, k; i<now+6; i++) {
		if(i > last) k = i - last - 1;
		else k = i;
		$(".prd-wrap").append($prd[k]);
	}
}

function ani() {
	if(dir == "P") target = "0";
	else target = "-50%";
	$(".prd-wrap").stop().animate({"left": target}, 500, function(){
		if(dir == "P") {
			if(now == 0) now = last;
			else now--;
		}
		else {
			if(now < last) now++;
			else now = 0;
		}
		init();
	});
}

$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);

function onPrev() {
	dir = "P";
	ani();
}

function onNext() {
	dir = "L";
	ani();
}

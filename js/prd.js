/* 통신에러 체크 */
function onErr(err) {
	console.log(err);
}



/* .prd를 변수에 넣기 */
var prd = [], last, now, dir, html;

/* 통신으로 데이터 가져오기 */
$.get('http://192.168.1.88:3000/warehouse').then(onRes).catch(onErr);

function onRes(res) {
	// console.log(res);
	// console.log(res.prd);
	// console.log(res.prd[0]);
	for(var i in res.prd) {
		html  = '<div class="prd">';
		html += '<img src="./img/'+res.prd[i].src+'" class="img">';
		html += '</div>';
		prd[i] = $(html);
	}
	last = prd.length - 1;
	now = last;
	init();
}



/* 초기화 */
function init() {
	$(".prd-wrap").empty();
	$(".prd-wrap").css({"left": "-25%"});
	for(var i=0, k=now; i<6; i++) {
		$(".prd-wrap").append($(prd[k]).clone());
		if(k == last) k = 0;
		else k++;
	}
	console.log('-------------');
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

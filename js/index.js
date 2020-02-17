// 36442237d85180cf58bcd70fc9d65d8f

new WOW({offset: 200}).init();
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

/* 지도 */
var container = document.getElementById('map');
var options = {
	center: new kakao.maps.LatLng(37.399538, 126.920305),
	level: 2
};
var map = new kakao.maps.Map(container, options);
var markerPosition  = new kakao.maps.LatLng(37.399538, 126.920305); 
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);

function setMapType(maptype) { 
	var roadmapControl = document.getElementById('btnRoadmap');
	var skyviewControl = document.getElementById('btnSkyview'); 
	if (maptype === 'roadmap') {
			map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
			roadmapControl.className = 'selected_btn';
			skyviewControl.className = 'btn';
	} else {
			map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);    
			skyviewControl.className = 'selected_btn';
			roadmapControl.className = 'btn';
	}
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
	map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
	map.setLevel(map.getLevel() + 1);
}
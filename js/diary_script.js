/* index.htmlの<head>タグ内で呼び出しているので、index.htmlの<body>タグ内に記述された内容より先に読み込まれるが、
   下記のコードは読み込まれはするが、保留にして、index.htmlの<script>タグより下に記述された内容が先に実行される。
   ※保留にしたコードは、それぞれ以下のタイミングで実行される。
   DOMContentLoaded…HTML読込完了後
   onload…CSS,画像,動画等全ての読込完了後
*/
document.addEventListener("DOMContentLoaded", sourceSizeDetermination);

window.onload = function() {
	document.getElementById('preload').remove();
}

function sourceSizeDetermination() {
	if (window.matchMedia('(max-width:767px)').matches) {
		//スマホ処理
		document.getElementById('video1').src="./video/LOAD_PHONE.mp4"
		document.getElementById('video2').src="./video/SNOW_PHONE.mp4"
		document.getElementById('logo').src="./image/YUIEL_LOGO_PHONE.PNG"
	} else {
		//PC処理
		document.getElementById('video1').src="./video/LOAD_PC.mp4"
		document.getElementById('video2').src="./video/SNOW_PC.mp4"
		document.getElementById('logo').src="./image/YUIEL_LOGO_PC.PNG"
	}
}

$(document).ready(function() {
	$('.menu-btn').on(
		'click', 
		function(){
			$('.menu').toggleClass('is-active');
		}
	);
});

/* F12キー押下不可にする */
document.addEventListener('keydown',(e) => {
	if (e.keyCode === 123) {
		e.preventDefault();
	}
});

/* ドラッグ不可にする */
document.addEventListener('onselectstart', function(event) {
	event.preventDefault();
});
document.addEventListener('onmousedown', function(event) {
	event.preventDefault();
});
document.addEventListener('onselectstart', function(event) {
	event.preventDefault();
});
document.addEventListener('onmousedown', function(event) {
	event.preventDefault();
});

/* 右クリック不可にする */
document.oncontextmenu = function () {return false;}
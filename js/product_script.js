/* index.htmlの<head>タグ内で呼び出しているので、index.htmlの<body>タグ内に記述された内容より先に読み込まれるが、
   下記のコードは読み込まれはするが、保留にして、index.htmlの<script>タグより下に記述された内容が先に実行される。
   ※保留にしたコードは、それぞれ以下のタイミングで実行される。
   DOMContentLoaded…HTML読込完了後
   onload…CSS,画像,動画等全ての読込完了後
*/
document.addEventListener("DOMContentLoaded", sourceSizeDetermination );

window.onload = function() {
	document.getElementById('preload').remove();
	videoChange();
}

function sourceSizeDetermination() {
	if (window.matchMedia('(max-width:767px)').matches) {
		//スマホ処理
		document.getElementById('video1').src="./video/LOAD_PHONE.mp4";
		document.getElementById('video2').src="./video/SNOW_PHONE.mp4";
	} else {
		//PC処理
		document.getElementById('video1').src="./video/LOAD_PC.mp4";
		document.getElementById('video2').src="./video/SNOW_PC.mp4";
	}
	document.getElementById('video3').src="./video/ROOM.mp4";
	document.getElementById('video3').style.opacity="0";
}

function videoChange() {
	const audio1 = document.getElementById('audio1');
	var flg = true;

	audio1.addEventListener("play", (event) => {
		document.getElementById('video2').style.opacity="0";
		document.getElementById('video2').style.transition="100s";
		document.getElementById('video3').style.opacity="1";
		document.getElementById('video3').style.transition="100s";
		document.getElementById('headline1').style.opacity="0";
		document.getElementById('headline1').style.transition="25s";
		document.getElementById('sentence1').style.opacity="0";
		document.getElementById('sentence1').style.transition="25s";
		document.getElementById('sentence2').style.opacity="0";
		document.getElementById('sentence2').style.transition="25s";
		document.getElementById('sentence3').style.opacity="0";
		document.getElementById('sentence3').style.transition="25s";
		document.getElementById('music-sentence2').style.opacity="0";
		document.getElementById('music-sentence2').style.transition="25s";
		document.getElementById('audio2').style.opacity="0";
		document.getElementById('audio2').style.transition="25s";
		document.getElementById('lyrics-headline2').style.opacity="0";
		document.getElementById('lyrics-headline2').style.transition="25s";
		document.getElementById('lyrics2').style.opacity="0";
		document.getElementById('lyrics2').style.transition="25s";
		document.getElementById('img1').style.opacity="0";
		document.getElementById('img1').style.transition="25s";

		if (audio1.currentTime < 1) {
			flg = true;
		}
	});
	audio1.addEventListener("pause", (event) => {
		document.getElementById('video2').style.opacity="1";
		document.getElementById('video2').style.transition="0s";
		document.getElementById('video3').style.opacity="0";
		document.getElementById('video3').style.transition="0s";
		document.getElementById('headline1').style.opacity="1";
		document.getElementById('headline1').style.transition="0s";
		document.getElementById('sentence1').style.opacity="1";
		document.getElementById('sentence1').style.transition="0s";
		document.getElementById('sentence2').style.opacity="1";
		document.getElementById('sentence2').style.transition="0s";
		document.getElementById('sentence3').style.opacity="1";
		document.getElementById('sentence3').style.transition="0s";
		document.getElementById('music-sentence2').style.opacity="1";
		document.getElementById('music-sentence2').style.transition="0s";
		document.getElementById('audio2').style.opacity="1";
		document.getElementById('audio2').style.transition="0s";
		document.getElementById('lyrics-headline2').style.opacity="1";
		document.getElementById('lyrics-headline2').style.transition="0s";
		document.getElementById('lyrics2').style.opacity="1";
		document.getElementById('lyrics2').style.transition="0s";
		document.getElementById('img1').style.opacity="1";
		document.getElementById('img1').style.transition="0s";
	});
	audio1.addEventListener("timeupdate", (event) => {
		if (audio1.currentTime > 108 && flg) {
			flg = false;
			document.getElementById('video3').style.opacity="0";
			document.getElementById('video3').style.transition="17s";
		}
	});
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
document.addEventListener('contextmenu', function(event) {
	event.preventDefault();
});
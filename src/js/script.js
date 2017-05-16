// var tl = TweenMax; // ta bort sen
// var intro = document.querySelector('.home-page');

// setInterval(function(){
// 	tl.to('.home-page', 2, {css:{backgroundImage:'linear-gradient(to left, rgb(255, 179, 255), rgb(255, 179, 179)', yoyo: true, repeat: -1}});
// }, 50);
// TweenLite.to($(this), 1, { css:{ backgroundImage: '-moz-linear-gradient(top, #3e3e40, #252122)'} });
/* ----------------------------------------------------------------------------
			HISTORY LINK
---------------------------------------------------------------------------- */
var links = document.querySelectorAll('href');

links.forEach(function(link) {

	link.addEventListener('click', function(e) {
		var data = e.target.getAttribute('href');
	    e.preventDefault();

			history.replaceState(null, null, data);

			//byt ut mot data-page ...någonting!
			// if(data === 'page-one') {
			// 	$('.page').hide();
			// 	$('#home-page').show();
			// } else if (data === 'page-two') {
			// 	$('.page').hide();
			// 	$('#insta-page').show();
			// } else if (data === 'page-three') {
			// 	$('.page').hide();
			// 	$('#map-page').show();
			// } else if (data === 'home') {
//       $('.page').hide();
//     }
		e.stopPropagation();
	}, false);
});

/* ----------------------------------------------------------------------------
			SCROLL EFFECT
---------------------------------------------------------------------------- */
function navHome() {
    $('html, body').animate({ scrollTop: $('#home-page').offset().top }, 'slow');
    return false;
}

function navInsta() {
    $('html, body').animate({ scrollTop: $('#insta-page').offset().top }, 'slow');
    return false;
}

function navMap() {
    $('html, body').animate({ scrollTop: $('#map-page').offset().top }, 'slow');
    return false;
}

/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
---------------------------------------------------------------------------- */
function getIGImages() {

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "getIGdata.php", true);

	xhr.addEventListener('load', function(resp) {
		console.log(this.responseText); 

		document.getElementById('img-container').innerHTML = this.responseText;
	});

	xhr.send();
}
setInterval(getIGImages, 60000);
window.addEventListener('load', getIGImages);

/* ----------------------------------------------------------------------------
			FIRST PAGE
---------------------------------------------------------------------------- */
var tl = TweenMax;
var audioTxt = document.querySelector('.intro-txt');
var anim = tl.to(audioTxt, 0.8, {scaleX: 1.2, scaleY: 1.2, repeat: -1, yoyo: true});

var icon = document.getElementById('icon');
setInterval(function() {
	$(icon).toggleClass("fa-volume-down fa-volume-up");
}, 800);

// Kommentar UNDER TIDEN - RADERA EJ DETTA!!
// setTimeout(function() {
// 	$('#main-page').show();
// 	$('#intro-page').fadeOut();
// 	clearInterval(interval);
// 	anim.kill();
// 	$('#sound-btn').fadeIn('slow');
// }, 4000);

/* ----------------------------------------------------------------------------
			BACKGROUND COLOR FADE ANIMATION
---------------------------------------------------------------------------- */
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgba("+r1+","+g1+","+b1+","+0.3+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgba("+r2+","+g2+","+b2+","+0.3+")";

 $('#intro-page').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}
var interval = setInterval(updateGradient, 10);

/* ----------------------------------------------------------------------------
			AUDIO BUTTON
---------------------------------------------------------------------------- */
const audioBtn = document.querySelector('.audio-btn');
const player = document.querySelector('#sound');

var audLoop = document.getElementById('sound');

audLoop.loop = true;
//audLoop.load(); 

audioBtn.addEventListener('click', function() {

	var audioIcon = document.getElementById('sound-icon');

	if(!player.paused) {
		player.pause();
		$(audioIcon).toggleClass("fa-volume-off fa-volume-up");
	} else {
		player.play();
		$(audioIcon).toggleClass("fa-volume-up fa-volume-off");
	}
});
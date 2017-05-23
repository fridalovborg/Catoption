var tl = TweenMax;
var headLayers = document.getElementById('head-layers');
var nose = document.querySelectorAll('#nose path, #nose ellipse');
var whiskers = document.querySelectorAll('#whiskers line');
var paw = document.getElementById('paw');
var highfiveLines = document.querySelectorAll('#highfive-lines path');
var catBody = document.getElementById('cat-body');
var eyebrowLeft = document.getElementById('eyebrow-left');
var eyebrowRight = document.getElementById('eyebrow-right');
var mouthRight = document.getElementById('mouth-right');
var mouthLeft = document.getElementById('mouth-left');
var rightEye = document.getElementById('right-eye');
var leftEye = document.getElementById('left-eye');
var semiClosed = document.getElementById('semi-closed');
var eyesClosed = document.getElementById('eyes-closed');
var tails = document.getElementById('tails');
var tailAnimation = document.querySelectorAll('#tails path');

var chatBubbleWhole = document.getElementsByClassName('svg-bubble');
var chatBubble = document.getElementById('chatbubble');
var patMe = document.querySelectorAll('#patme path');
var adoptMe = document.querySelectorAll('#adoptme path');
var highfiveMe = document.querySelectorAll('#highfiveme path');

/* ----------------------------------------------------------------------------
	NOSE
	- makes the nose and whiskers do a small rotation/shake every 5 seconds
---------------------------------------------------------------------------- */
function noseAnimation(el) {
	setInterval(function() {
		tl.staggerFromTo(el, 0.2, {rotation: 0, transformOrigin: 'center center'}, {rotation: 10, transformOrigin: 'center center', yoyo: true, repeat: 1} );
	}, 5000);
}

/* ----------------------------------------------------------------------------
	EYES
	- makes the eyes blink every 4 seconds
---------------------------------------------------------------------------- */
var eyeBlinkInterval;
function eyeBlink() {
	eyeBlinkInterval = window.setInterval(function() {
		tl.fromTo(eyesClosed, 0.3, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 0.2});
		tl.fromTo([rightEye, leftEye], 0.3, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 0.2});
	}, 4000);
}

/* ----------------------------------------------------------------------------
	CHATBUBBLE
	- makes the chatBubble appear every 8 seconds

	


---------------------------------------------------------------------------- */
/*function chatBubblePop() {
	setInterval(function() {
		tl.fromTo(chatBubbleWhole, 0.7, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 1});

			tl.fromTo(patMe, 0.7, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 1, delay: 3});
			tl.fromTo(adoptMe, 0.7, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 1, delay: 6});
			tl.fromTo(highfiveMe, 0.7, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 1, delay: 9});
		
	}, 3000);
}*/

/* ----------------------------------------------------------------------------
	TAIL IS MOVING
	- makes the cats tail sway
---------------------------------------------------------------------------- */
function tailMoving() {
	setInterval(function() {
		tl.staggerFromTo(tailAnimation, 1, {rotation: 0, transformOrigin: "center center"}, {rotation: -25, transformOrigin: "center center", yoyo: true, repeat: 1} );
	}, 4000);
}

/* ----------------------------------------------------------------------------
	HEAD
	- when document has loaded, the head starts moving to the music 
	- nose+whiskers start twitching
---------------------------------------------------------------------------- */
$(document).ready(function() {
	tl.fromTo(headLayers, 0.8, {x:-15, y:0}, {x:15, y:0, yoyo: true, repeat: -1 });
	noseAnimation(nose);
	noseAnimation(whiskers);
	eyeBlink();
	chatBubblePop();
	tailMoving();	

	// $(document).on('click', function() {
 //        player.play();
 //    });


//	$('#paw').css('opacity', '0');
patMe.css('opacity', '0');
highfiveMe.css('opacity', '0');
adoptMe.css('opacity', '0');


});

/* ----------------------------------------------------------------------------
	PAW
	- scales the paw and adds highfive lines when user clicks the cats paw
	- triggers and plays highfive sounds
	- adds +1 to the pay the cat counter
---------------------------------------------------------------------------- */
paw.addEventListener('click', highfivePaw);
function highfivePaw() {
	tl.fromTo(paw, 0.3, {scale: 1, x:0, y:0}, {scale:1.3, x:0, y:-15, yoyo: true, repeat: 1});
	tl.fromTo($('#highfive-lines'), 0.5, {alpha:0}, {alpha:1, yoyo: true, repeat: 1});

	$("#paw-sound").trigger('load');
	$("#paw-sound").trigger('play');

	addValue(); 
}

/* ----------------------------------------------------------------------------
	BODY
	- when stroking the cat (clicking on the catBody), the eyebrows rotate
	  and eyes goes from open to closed
	- cat purring sounds triggers and plays
	- adds +1 to the pay the cat counter  
---------------------------------------------------------------------------- */
catBody.addEventListener('click', pleasedCat);
function pleasedCat() {
	tl.staggerFromTo([eyebrowRight, mouthRight], 2, {rotation: 0, transformOrigin: 'center center'}, {rotation: -30, transformOrigin: 'center center', yoyo: true, repeat: 1} );
	tl.staggerFromTo([eyebrowLeft, mouthLeft], 2, {rotation: 0, transformOrigin: 'center center'}, {rotation: 40, transformOrigin: 'center center', yoyo: true, repeat: 1} );
	tl.fromTo([rightEye, leftEye], 0.5, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 2});
	tl.fromTo([eyesClosed], 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});

	$("#purr").trigger('load');
	$("#purr").trigger('play');

	addValue();
}

/* ----------------------------------------------------------------------------
	TAIL PULL
	- when touching/clicking on the cats tail, the cats eye become semiclosed,
	  and eyebrows rotate to make an angry face
---------------------------------------------------------------------------- */
tails.addEventListener('click', angryCat);
function angryCat() {
/*	window.clearInterval(eyeBlinkInterval);
	setTimeout(function() {
		eyeBlink();
	}, 4000);
*/
	tl.fromTo(semiClosed, 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});
	tl.staggerFromTo($('#eyebrow-right'), 1, {rotation: 0, transformOrigin: 'center center'}, {rotation: -50, transformOrigin: 'center center', yoyo: true, repeat: 1, repeatDelay: 0.5});
	tl.staggerFromTo($('#eyebrow-left'), 1, {rotation: 0, transformOrigin: 'center center'}, {rotation: 60, transformOrigin: 'center center', yoyo: true, repeat: 1, repeatDelay: 0.5});
}

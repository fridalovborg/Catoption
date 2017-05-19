/* PROBLEM:
1. svansen blir ful när den animeras. går detta att lösa på något sätt?
4. de olika animationerna krockar, tex klappa kropp, svans och blinkning
7. Fråga om vilken funktion en ska göra, se längst ner på sidan + varför funkar ljudet bara om en har olika av dessa?
8. Fråga om varför vissa funktioner bara fungerar med $ och id och inte variablenamenet
*/

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

var chatBubble = document.getElementsByClassName('svg-bubble');

//makes the nose and whiskers do a small rotation/shake every 5 seconds
function noseAnimation(el) {
	setInterval(function() {
		tl.staggerFromTo(el, 0.2, {rotation: 0, transformOrigin: 'center center'}, {rotation: 10, transformOrigin: 'center center', yoyo: true, repeat: 1} );
	}, 5000);
}

//makes the eyes blink every 4 seconds
var eyeBlinkInterval;
function eyeBlink() {
	eyeBlinkInterval = window.setInterval(function() {
		tl.fromTo(eyesClosed, 0.3, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 0.2});
		tl.fromTo([rightEye, leftEye], 0.3, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 0.2});
	}, 4000);
}

//makes the chatBubble appear every 8 seconds
function chatBubblePop() {
	setInterval(function() {
		tl.fromTo(chatBubble, 0.7, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 1});
	}, 8000);
}

//makes the cats tail sway
function tailMoving() {
	setInterval(function() {
		tl.staggerFromTo(tailAnimation, 1, {rotation: 0, transformOrigin: "center center"}, {rotation: -25, transformOrigin: "center center", yoyo: true, repeat: 1} );
	}, 4000);
}

//when document has loaded, the head starts moving to the music and nose+whiskers start twitching
$(document).ready(function() {
	tl.fromTo(headLayers, 0.8, {x:-15, y:0}, {x:15, y:0, yoyo: true, repeat: -1 });
	noseAnimation(nose);
	noseAnimation(whiskers);
	eyeBlink();
	chatBubblePop();
	tailMoving();
	
});

paw.addEventListener('click', highfivePaw);
function highfivePaw() {
	tl.fromTo(paw, 0.3, {scale: 1, x:0, y:0}, {scale:1.3, x:0, y:-15, yoyo: true, repeat: 1});
	tl.fromTo($('#highfive-lines'), 0.5, {alpha:0}, {alpha:1, yoyo: true, repeat: 1});

	var hfSound = new Audio('../audio/highfive.m4a');
	hfSound.play();

	//addValue();
}

//scales the cats paw when user clicks it, making it look like a high five
// paw.addEventListener("click", function(){
// 	tl.fromTo(paw, 0.3, {scale: 1, x:0, y:0}, {scale:1.3, x:0, y:-15, yoyo: true, repeat: 1});
// 	tl.fromTo($('#highfive-lines'), 0.5, {alpha:0}, {alpha:1, yoyo: true, repeat: 1});

// 	var hfSound = new Audio("../audio/highfive.m4a");
// 	hfSound.play();
// });

//when stroking the cat (clicking on the catBody) 
// catBody.addEventListener('click', pleasedCat);

// function pleasedCat() {
// 	tl.staggerFromTo([eyebrowRight, mouthRight], 2, {rotation: 0, transformOrigin: 'center center'}, {rotation: -30, transformOrigin: 'center center', yoyo: true, repeat: 1} );
// 	tl.staggerFromTo([eyebrowLeft, mouthLeft], 2, {rotation: 0, transformOrigin: 'center center'}, {rotation: 40, transformOrigin: 'center center', yoyo: true, repeat: 1} );
// 	tl.fromTo([rightEye, leftEye], 0.5, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 2});
// 	tl.fromTo([eyesClosed], 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});

// 	var audio = new Audio('../audio/catpurr.mp3');
// 	audio.play();
// }

catBody.addEventListener('click', function() {
	tl.staggerFromTo([eyebrowRight, mouthRight], 2, {rotation: 0, transformOrigin: 'center center'}, {rotation: -30, transformOrigin: "center center", yoyo: true, repeat: 1} );
	tl.staggerFromTo([eyebrowLeft, mouthLeft], 2, {rotation: 0, transformOrigin: 'center center'}, {rotation: 40, transformOrigin: "center center", yoyo: true, repeat: 1} );
	tl.fromTo([rightEye, leftEye], 0.5, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 2});
	tl.fromTo([eyesClosed], 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});

	var audio = new Audio('/../../audio/catpurr.mp3');
	audio.play();

	//addValue();
});


// FRÅGA-Jenni: om att göra på detta sättet eller sättet ovan: 


//when touching/clicking on the cats tail
tails.addEventListener('click', angryCat);
function angryCat() {
	window.clearInterval(eyeBlinkInterval);
	setTimeout(function() {
		eyeBlink();
	}, 3000);

	tl.fromTo(semiClosed, 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});
	tl.staggerFromTo($('#eyebrow-right'), 1, {rotation: 0, transformOrigin: 'center center'}, {rotation: -50, transformOrigin: 'center center', yoyo: true, repeat: 1, repeatDelay: 0.5});
	tl.staggerFromTo($('#eyebrow-left'), 1, {rotation: 0, transformOrigin: 'center center'}, {rotation: 60, transformOrigin: 'center center', yoyo: true, repeat: 1, repeatDelay: 0.5});
}

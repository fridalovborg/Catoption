/* PROBLEM:
1. svansen blir ful när den animeras. går detta att lösa på något sätt?
2. ögonblinkningen var 3e sekund krockar med andra funktioner som påverkar ögonen. hur fixa?
3. ögonbrynsrotationen på rad ~95-96 funkar inte
4. de olika animationerna krockar, tex klappa kropp, svans och blinkning
5. ljudeffekterna funkar inte
6. kattens huvud åker ur viewbox
*/

var tl = TweenMax;
var headLayers = document.getElementById('headLayers');
var nose = document.querySelectorAll('#nose path, #nose ellipse');
var whiskers = document.querySelectorAll('#whiskers line');
var paw = document.getElementById('paw');
var highfiveLines = document.querySelectorAll('#highfiveLines path');
var body = document.getElementById('body');
var eyebrowLeft = document.getElementById('eyebrowLeft');
var eyebrowRight = document.getElementById('eyebrowRight');
var mouthRight = document.getElementById('mouthRight');
var mouthLeft = document.getElementById('mouthLeft');
var rightEye = document.getElementById('rightEye');
var leftEye = document.getElementById('leftEye');
var semiClosed = document.getElementById('semiClosed');
var eyesClosed = document.getElementById('eyesClosed');
var tails = document.getElementById('tails');
var tailAnimation = document.querySelectorAll('#tails path');

var chatbubble = document.getElementsByClassName('svg-bubble');

//makes the nose and whiskers do a small rotation/shake every 5 seconds
function noseAnimation(el) {
	setInterval(function() {
		tl.staggerFromTo(el, 0.2, {rotation: 0, transformOrigin: "center center"}, {rotation: 10, transformOrigin: "center center", yoyo: true, repeat: 1} );
	}, 5000);
}
var testtest;
//makes the eyes blink every 4 seconds
function eyeBlink() {
	testtest = window.setInterval(function() {
		tl.fromTo(eyesClosed, 0.3, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 0.2});
		tl.fromTo([rightEye, leftEye], 0.3, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 0.2});
	}, 4000);
}

//makes the chatbubble appear every 8 seconds
function chatbubblePop() {
	setInterval(function() {
		tl.fromTo(chatbubble, 0.7, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 1});
	}, 8000);
}

//when document has loaded, the head starts moving to the music and nose+whiskers start twitching
$(document).ready(function() {
	tl.fromTo(headLayers, 0.8, {x:-15, y:0}, {x:15, y:0, yoyo: true, repeat: -1 });
	noseAnimation(nose);
	noseAnimation(whiskers);
	eyeBlink();
	chatbubblePop();

	//Svansanimering. blir fult!!!
	//tl.staggerFromTo(tailAnimation, 1, {alpha: 0}, {alpha: 1, yoyo: true, repeat: -1}, 0.9);

});

//scales the cats paw when user clicks it, making it look like a high five
paw.addEventListener("click", function(){
	tl.fromTo(paw, 0.3, {scale: 1, x:0, y:0}, {scale:1.3, x:0, y:-15, yoyo: true, repeat: 1});
	tl.fromTo($('#highfiveLines'), 0.5, {alpha:0}, {alpha:1, yoyo: true, repeat: 1});
});

//when stroking the cat (clicking on the body) 
body.addEventListener("click", function() {
	tl.staggerFromTo([eyebrowRight, mouthRight], 2, {rotation: 0, transformOrigin: "center center"}, {rotation: -30, transformOrigin: "center center", yoyo: true, repeat: 1} );
	tl.staggerFromTo([eyebrowLeft, mouthLeft], 2, {rotation: 0, transformOrigin: "center center"}, {rotation: 40, transformOrigin: "center center", yoyo: true, repeat: 1} );
	tl.fromTo([rightEye, leftEye], 0.5, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 2});
	tl.fromTo([eyesClosed], 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});

	//FUNKAR INTE
	var audio = new Audio("../catpurr.mp3");
	audio.play();
});

tails.addEventListener("click", angryCat);
//when touching/clicking on the cats tail

function angryCat() {
	window.clearInterval(testtest);
	setTimeout(function() {
		eyeBlink();
	}, 3000);

	tl.fromTo(semiClosed, 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});
	tl.staggerFromTo($('#eyebrowRight'), 1, {rotation: 0, transformOrigin: "center center"}, {rotation: -50, transformOrigin: "center center", yoyo: true, repeat: 1, repeatDelay: 0.5});
	tl.staggerFromTo($('#eyebrowLeft'), 1, {rotation: 0, transformOrigin: "center center"}, {rotation: 60, transformOrigin: "center center", yoyo: true, repeat: 1, repeatDelay: 0.5});
}

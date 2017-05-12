/* PROBLEM:
1. svansen blir ful när den animeras. går detta att lösa på något sätt?
2. ögonblinkningen var 3e sekund krockar med andra funktioner som påverkar ögonen. hur fixa?
3. ögonbrynsrotationen på rad 79, 78 funkar inte
4. de olika animationerna krockar, tex klappa kropp, svans och blinkning
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

//makes the nose and whiskers do a small rotation/shake every 5 seconds
function noseAnimation(el) {
	setInterval(function() {
		tl.staggerFromTo(el, 0.2, {rotation: 0, transformOrigin: "center center"}, {rotation: 10, transformOrigin: "center center", yoyo: true, repeat: 1} );
	}, 5000);
}

//makes the eyes blink every 4 seconds
function eyeBlink() {
	setInterval(function() {
		tl.fromTo([eyesClosed], 0.3, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 0.2});
		tl.fromTo([rightEye, leftEye], 0.3, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 0.2});
	}, 4000);
}

//when document has loaded, the head starts moving to the music and nose+whiskers start twitching
$(document).ready(function() {
	tl.fromTo(headLayers, 0.8, {x:-15, y:0}, {x:15, y:0, yoyo: true, repeat: -1 });
	noseAnimation(nose);
	noseAnimation(whiskers);
	eyeBlink();

	//Svansanimering. blir fult!!!
	//tl.staggerFromTo(tailAnimation, 1, {alpha: 0}, {alpha: 1, yoyo: true, repeat: -1}, 0.9);



	//flytta detta till css istället, annars funkar inte animationen med alphan nedan
	//$('#highfiveLines').css('opacity', '0');
	$('#semiClosed').css('opacity', '0');
	$('#eyesClosed').css('opacity', '0');
});

//scales the cats paw when user clicks it, making it look like a high five
paw.addEventListener("click", function(){
	tl.fromTo(paw, 0.3, {scale: 1}, {scale:1.3, yoyo: true, repeat: 1});
	tl.fromTo(highfiveLines, 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1});

});

//when stroking the cat (clicking on the body) 
body.addEventListener("click", function() {
	tl.staggerFromTo([eyebrowRight, mouthRight], 2, {rotation: 0, transformOrigin: "center center"}, {rotation: -30, transformOrigin: "center center", yoyo: true, repeat: 1} );
	tl.staggerFromTo([eyebrowLeft, mouthLeft], 2, {rotation: 0, transformOrigin: "center center"}, {rotation: 40, transformOrigin: "center center", yoyo: true, repeat: 1} );
	tl.fromTo([rightEye, leftEye], 0.5, {alpha: 1}, {alpha:0, yoyo: true, repeat: 1, repeatDelay: 2});
	tl.fromTo([eyesClosed], 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});
});

//when touching/clicking on the cats tail
tails.addEventListener("click", function() {
	tl.fromTo(semiClosed, 0.5, {alpha: 0}, {alpha:1, yoyo: true, repeat: 1, repeatDelay: 2});
	//dessa två funkar inte - WHY??
	tl.staggerFromTo(eyebrowRight, 1, {rotation: 0, transformOrigin: "center center"}, {rotation: -50, transformOrigin: "center center", yoyo: true, repeat: 1} );
	tl.staggerFromTo(eyebrowLeft, 1, {rotation: 0, transformOrigin: "center center"}, {rotation: 60, transformOrigin: "center center", yoyo: true, repeat: 1} );
});

/*
var custReturn = document.querySelectorAll('#customerreturn .circle');

$(document).ready(function() {
	//roterar bladet till höger
	TweenMax.staggerFromTo(leaf, 1, {rotation: 0, transformOrigin: "center center"}, {rotation: 15, transformOrigin: "center center", yoyo: true, repeat: -1} );
	//roterar stjärnan i medaljen
	star.addEventListener('mouseenter', rotateSymbol);
	//roterar e:et i logotypen
	TweenMax.staggerFromTo([wecoLogo, bugFree, custReturn], 3, {rotation: 0, transformOrigin: "center center"}, {rotation: 360, transformOrigin: "center center"} );
	//animerar pilen i introt
	
	//FUNKAR INTE
	TweenMax.staggerFromTo(five, 1, {alpha: 0}, {alpha: 1});
	// TweenMax.to(leaf, 2, {fill: "DarkGrey", yoyo: true, repeat: -1, repeatDelay: Math.floor(Math.random() * 3) });
	//	TweenMax.to(windowGloben, 2, {fill: "black", yoyo: true, repeat: -1 });
	//	TweenMax.staggerFromTo(stockholm, 1, {alpha: 0}, {alpha: 1}, 0.1);
	
});

function rotateSymbol() {
	if(TweenMax.isTweening(star)) {
		return;
	}
	TweenMax.fromTo('#star', 5, {rotation: 0, transformOrigin: "center center"}, {rotation: 360, transformOrigin: "center center"});
}

/*
var pathElements = document.querySelectorAll('path');
console.log(pathElements);

var tl = new TimelineMax({ paused: true });
tl.staggerFromTo(pathElements, 1, {opacity: 0}, {opacity: 1, rotation: 1080}, 0.2);
tl.play();

*/
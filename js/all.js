/* PROBLEM:
1. svansen blir ful när den animeras. går detta att lösa på något sätt?
4. de olika animationerna krockar, tex klappa kropp, svans och blinkning
7. Fråga om vilken funktion en ska göra, se längst ner på sidan + varför funkar ljudet bara om en har olika av dessa?
8. Fråga om varför vissa funktioner bara fungerar med $ och id och inte variablenamenet
*/
//makes the nose and whiskers do a small rotation/shake every 5 seconds
function noseAnimation(e){setInterval(function(){tl.staggerFromTo(e,.2,{rotation:0,transformOrigin:"center center"},{rotation:10,transformOrigin:"center center",yoyo:!0,repeat:1})},5e3)}function eyeBlink(){eyeBlinkInterval=window.setInterval(function(){tl.fromTo(eyesClosed,.3,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:.2}),tl.fromTo([rightEye,leftEye],.3,{alpha:1},{alpha:0,yoyo:!0,repeat:1,repeatDelay:.2})},4e3)}
//makes the chatBubble appear every 8 seconds
function chatBubblePop(){setInterval(function(){tl.fromTo(chatBubble,.7,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:1})},8e3)}function highfivePaw(){tl.fromTo(paw,.3,{scale:1,x:0,y:0},{scale:1.3,x:0,y:-15,yoyo:!0,repeat:1}),tl.fromTo($("#highfive-lines"),.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1}),new Audio("../audio/highfive.m4a").play()}function angryCat(){window.clearInterval(eyeBlinkInterval),setTimeout(function(){eyeBlink()},3e3),tl.fromTo(semiClosed,.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:2}),tl.staggerFromTo($("#eyebrow-right"),1,{rotation:0,transformOrigin:"center center"},{rotation:-50,transformOrigin:"center center",yoyo:!0,repeat:1,repeatDelay:.5}),tl.staggerFromTo($("#eyebrow-left"),1,{rotation:0,transformOrigin:"center center"},{rotation:60,transformOrigin:"center center",yoyo:!0,repeat:1,repeatDelay:.5})}function initMap(){map=new google.maps.Map(document.getElementById("the-map"),{zoom:10,scrollwheel:!1}),infoWindow=new google.maps.InfoWindow;var e;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){//getCurrentPosition
// MY POSITION COORDS
var o={lat:t.coords.latitude,lng:t.coords.longitude};an=google.maps.Animation.DROP,
// MY POSITIONS MARKER
e?e.setPosition(o):e=new google.maps.Marker({position:o,animation:an,map:map}),
// INFO BOX FOR MY POSITION
google.maps.event.addListener(e,"click",function(){var e="<strong>You are here!</strong><br>";infoWindow.setContent(e),infoWindow.open(map,this)}),map.setCenter(o);var n={location:o,radius:"50000",keyword:"cat_shelter"};new google.maps.places.PlacesService(map).nearbySearch(n,showPlaces)},function(){handleLocationError(!0,infoWindow,map.getCenter())}):
// BROWSER DO NOT SUPPORT GEOLOCATION
handleLocationError(!1,infoWindow,map.getCenter())}function showPlaces(e,t){if(t==google.maps.places.PlacesServiceStatus.OK)for(var o=0;o<e.length;o++)addMarker(e[o]),console.log(e[o])}function addMarker(e){an=google.maps.Animation.DROP;var t=new google.maps.Marker({map:map,animation:an,position:e.geometry.location,icon:"jskampanj/img/icon.png"});google.maps.event.addListener(t,"click",function(){var t="<strong>"+e.name+"</strong><br>";t+=e.vicinity,infoWindow.setContent(t),infoWindow.open(map,this)})}/*links.forEach(function(link) {

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
function navHome(){return $("html, body").animate({scrollTop:$("#home-page").offset().top},"slow"),!1}function navInsta(){return $("html, body").animate({scrollTop:$("#insta-page").offset().top},"slow"),!1}function navMap(){return $("html, body").animate({scrollTop:$("#map-page").offset().top},"slow"),!1}/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
---------------------------------------------------------------------------- */
function getIGImages(){var e=new XMLHttpRequest;e.open("GET","getIGdata.php?foo="+Math.random(),!0),e.addEventListener("readystatechange",function(e){console.log(this),4===this.readyState&&200===this.status&&(document.getElementById("img-container").innerHTML=this.responseText)}),e.send()}var tl=TweenMax,headLayers=document.getElementById("head-layers"),nose=document.querySelectorAll("#nose path, #nose ellipse"),whiskers=document.querySelectorAll("#whiskers line"),paw=document.getElementById("paw"),highfiveLines=document.querySelectorAll("#highfive-lines path"),catBody=document.getElementById("cat-body"),eyebrowLeft=document.getElementById("eyebrow-left"),eyebrowRight=document.getElementById("eyebrow-right"),mouthRight=document.getElementById("mouth-right"),mouthLeft=document.getElementById("mouth-left"),rightEye=document.getElementById("right-eye"),leftEye=document.getElementById("left-eye"),semiClosed=document.getElementById("semi-closed"),eyesClosed=document.getElementById("eyes-closed"),tails=document.getElementById("tails"),tailAnimation=document.querySelectorAll("#tails path"),chatBubble=document.getElementsByClassName("svg-bubble"),eyeBlinkInterval;
//when document has loaded, the head starts moving to the music and nose+whiskers start twitching
$(document).ready(function(){tl.fromTo(headLayers,.8,{x:-15,y:0},{x:15,y:0,yoyo:!0,repeat:-1}),noseAnimation(nose),noseAnimation(whiskers),eyeBlink(),chatBubblePop()}),paw.addEventListener("click",highfivePaw),
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
catBody.addEventListener("click",function(){tl.staggerFromTo([eyebrowRight,mouthRight],2,{rotation:0,transformOrigin:"center center"},{rotation:-30,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.staggerFromTo([eyebrowLeft,mouthLeft],2,{rotation:0,transformOrigin:"center center"},{rotation:40,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.fromTo([rightEye,leftEye],.5,{alpha:1},{alpha:0,yoyo:!0,repeat:1,repeatDelay:2}),tl.fromTo([eyesClosed],.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:2}),new Audio("../audio/catpurr.mp3").play()}),
// FRÅGA-Jenni: om att göra på detta sättet eller sättet ovan: 
//when touching/clicking on the cats tail
tails.addEventListener("click",angryCat),navigator.userAgent.match(/Trident\/7\./)&&($(".svg-cat").css("width","100%"),$(".svg-cat").css("height","100vh"),$(".svg-cat").css("max-height","100vh"),$(".cat-logotype").css("width","50%"),$(".cat-logotype").css("height","30%"));for(var map,infoWindow,an,links=document.querySelectorAll("href"),i=0;i<links.length;i++)links[i].addEventListener("click",function(e){var t=e.target.getAttribute("href");e.preventDefault(),history.replaceState(null,null,t),
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
e.stopPropagation()},!1);setInterval(getIGImages,6e4),window.addEventListener("load",getIGImages);/* ----------------------------------------------------------------------------
			FIRST PAGE
---------------------------------------------------------------------------- */
var tl=TweenMax,audioTxt=document.querySelector(".pulse-txt"),anim=tl.to(audioTxt,.8,{scaleX:1.2,scaleY:1.2,repeat:-1,yoyo:!0}),icon=document.getElementById("icon");setInterval(function(){$(icon).toggleClass("fa-volume-down fa-volume-up")},800);
// Kommentar UNDER TIDEN - RADERA EJ DETTA!!
// setTimeout(function() {
// 	$('#main-page').show();
// 	$('#intro-page').fadeOut();
// 	//clearInterval(interval);
// 	anim.kill();
// 	$('#sound-btn').fadeIn('slow');
// }, 4000);
/* ----------------------------------------------------------------------------
			BACKGROUND COLOR FADE ANIMATION
---------------------------------------------------------------------------- */
// var colors = new Array(
//   [62,35,255],
//   [60,255,60],
//   [255,35,98],
//   [45,175,230],
//   [255,0,255],
//   [255,128,0]);
// var step = 0;
// //color table indices for: 
// // current color left
// // next color left
// // current color right
// // next color right
// var colorIndices = [0,1,2,3];
// //transition speed
// var gradientSpeed = 0.002;
// function updateGradient() {
//   if ( $===undefined ) return;
// var c0_0 = colors[colorIndices[0]];
// var c0_1 = colors[colorIndices[1]];
// var c1_0 = colors[colorIndices[2]];
// var c1_1 = colors[colorIndices[3]];
// var istep = 1 - step;
// var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
// var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
// var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
// var color1 = "rgba("+r1+","+g1+","+b1+","+0.3+")";
// var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
// var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
// var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
// var color2 = "rgba("+r2+","+g2+","+b2+","+0.3+")";
//  $('#intro-page').css({
//    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
//     background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
//   step += gradientSpeed;
//   if ( step >= 1 )
//   {
//     step %= 1;
//     colorIndices[0] = colorIndices[1];
//     colorIndices[2] = colorIndices[3];
//     //pick two new target color indices
//     //do not pick the same as the current one
//     colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//     colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//   }
// }
// var interval = setInterval(updateGradient, 10);
/* ----------------------------------------------------------------------------
			AUDIO BUTTON
---------------------------------------------------------------------------- */
const audioBtn=document.querySelector(".audio-btn"),player=document.querySelector("#sound");var audLoop=document.getElementById("sound");
//audLoop.loop = true;
//audLoop.load(); 
audioBtn.addEventListener("click",function(){var e=document.getElementById("sound-icon");player.paused?(player.play(),$(e).toggleClass("fa-volume-up fa-volume-off")):(player.pause(),$(e).toggleClass("fa-volume-off fa-volume-up"))});
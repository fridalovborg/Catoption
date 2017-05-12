/* PROBLEM:
1. svansen blir ful när den animeras. går detta att lösa på något sätt?
2. ögonblinkningen var 3e sekund krockar med andra funktioner som påverkar ögonen. hur fixa?
3. ögonbrynsrotationen på rad 79, 78 funkar inte
4. de olika animationerna krockar, tex klappa kropp, svans och blinkning
*/
//makes the nose and whiskers do a small rotation/shake every 5 seconds
function noseAnimation(e){setInterval(function(){tl.staggerFromTo(e,.2,{rotation:0,transformOrigin:"center center"},{rotation:10,transformOrigin:"center center",yoyo:!0,repeat:1})},5e3)}
//makes the eyes blink every 4 seconds
function eyeBlink(){setInterval(function(){tl.fromTo([eyesClosed],.3,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:.2}),tl.fromTo([rightEye,leftEye],.3,{alpha:1},{alpha:0,yoyo:!0,repeat:1,repeatDelay:.2})},4e3)}/* ----------------------------------------------------------------------------
			SCROLL EFFECT
---------------------------------------------------------------------------- */
function scrollOne(){return $("html, body").animate({scrollTop:$("#home-page").offset().top},"slow"),!1}function scrollTwo(){return $("html, body").animate({scrollTop:$("#insta-page").offset().top},"slow"),!1}function scrollThree(){return $("html, body").animate({scrollTop:$("#contact-page").offset().top},"slow"),!1}/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
---------------------------------------------------------------------------- */
function getIGImages(){var e=new XMLHttpRequest;e.open("GET","getIGdata.php",!0),e.addEventListener("load",function(e){console.log(this.responseText),document.getElementById("img-container").innerHTML=this.responseText}),e.send()}function initMap(){currentLocation=new google.maps.LatLng(59.346027,18.058272),myStyles={default:null,hide:[{featureType:"poi",stylers:[{visibility:"off"}]}]},map=new google.maps.Map(document.getElementById("map"),{center:currentLocation,zoom:17,styles:myStyles.hide}),infoWindow=new google.maps.InfoWindow;var e={location:currentLocation,radius:"5000",types:["physiotherapist"],name:[""],
// openNow: true,
rankBy:google.maps.places.RankBy.PROMINENCE};new google.maps.places.PlacesService(map).nearbySearch(e,showPlaces);var t=document.getElementById("style-selector-control");map.controls[google.maps.ControlPosition.TOP_LEFT].push(t),document.getElementById("hide-poi").addEventListener("click",function(){map.setOptions({styles:myStyles.hide})}),document.getElementById("show-poi").addEventListener("click",function(){map.setOptions({styles:myStyles.default})})}function updateGradient(){if(void 0!==$){var e=colors[colorIndices[0]],t=colors[colorIndices[1]],o=colors[colorIndices[2]],n=colors[colorIndices[3]],a=1-step,r=Math.round(a*e[0]+step*t[0]),l=Math.round(a*e[1]+step*t[1]),i=Math.round(a*e[2]+step*t[2]),s="rgba("+r+","+l+","+i+",0.3)",c=Math.round(a*o[0]+step*n[0]),d=Math.round(a*o[1]+step*n[1]),y=Math.round(a*o[2]+step*n[2]),m="rgba("+c+","+d+","+y+",0.3)";$("#load-page").css({background:"-webkit-gradient(linear, left top, right top, from("+s+"), to("+m+"))"}).css({background:"-moz-linear-gradient(left, "+s+" 0%, "+m+" 100%)"}),step+=gradientSpeed,step>=1&&(step%=1,colorIndices[0]=colorIndices[1],colorIndices[2]=colorIndices[3],
//pick two new target color indices
//do not pick the same as the current one
colorIndices[1]=(colorIndices[1]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length,colorIndices[3]=(colorIndices[3]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length)}}var tl=TweenMax,headLayers=document.getElementById("headLayers"),nose=document.querySelectorAll("#nose path, #nose ellipse"),whiskers=document.querySelectorAll("#whiskers line"),paw=document.getElementById("paw"),highfiveLines=document.querySelectorAll("#highfiveLines path"),body=document.getElementById("body"),eyebrowLeft=document.getElementById("eyebrowLeft"),eyebrowRight=document.getElementById("eyebrowRight"),mouthRight=document.getElementById("mouthRight"),mouthLeft=document.getElementById("mouthLeft"),rightEye=document.getElementById("rightEye"),leftEye=document.getElementById("leftEye"),semiClosed=document.getElementById("semiClosed"),eyesClosed=document.getElementById("eyesClosed"),tails=document.getElementById("tails"),tailAnimation=document.querySelectorAll("#tails path");
//when document has loaded, the head starts moving to the music and nose+whiskers start twitching
$(document).ready(function(){tl.fromTo(headLayers,.8,{x:-15,y:0},{x:15,y:0,yoyo:!0,repeat:-1}),noseAnimation(nose),noseAnimation(whiskers),eyeBlink(),
//Svansanimering. blir fult!!!
//tl.staggerFromTo(tailAnimation, 1, {alpha: 0}, {alpha: 1, yoyo: true, repeat: -1}, 0.9);
//flytta detta till css istället, annars funkar inte animationen med alphan nedan
//$('#highfiveLines').css('opacity', '0');
$("#semiClosed").css("opacity","0"),$("#eyesClosed").css("opacity","0")}),
//scales the cats paw when user clicks it, making it look like a high five
paw.addEventListener("click",function(){tl.fromTo(paw,.3,{scale:1},{scale:1.3,yoyo:!0,repeat:1}),tl.fromTo(highfiveLines,.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1})}),
//when stroking the cat (clicking on the body) 
body.addEventListener("click",function(){tl.staggerFromTo([eyebrowRight,mouthRight],2,{rotation:0,transformOrigin:"center center"},{rotation:-30,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.staggerFromTo([eyebrowLeft,mouthLeft],2,{rotation:0,transformOrigin:"center center"},{rotation:40,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.fromTo([rightEye,leftEye],.5,{alpha:1},{alpha:0,yoyo:!0,repeat:1,repeatDelay:2}),tl.fromTo([eyesClosed],.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:2})}),
//when touching/clicking on the cats tail
tails.addEventListener("click",function(){tl.fromTo(semiClosed,.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:2}),
//dessa två funkar inte - WHY??
tl.staggerFromTo(eyebrowRight,1,{rotation:0,transformOrigin:"center center"},{rotation:-50,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.staggerFromTo(eyebrowLeft,1,{rotation:0,transformOrigin:"center center"},{rotation:60,transformOrigin:"center center",yoyo:!0,repeat:1})});/*
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
/* ----------------------------------------------------------------------------
			HISTORY LINK
---------------------------------------------------------------------------- */
var links=document.querySelectorAll("h2");links.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.getAttribute("class");e.preventDefault(),history.replaceState(null,null,t),
//byt ut mot data-page ...någonting!
// if(data === 'page-one') {
// 	$('.page').hide();
// 	$('#home-page').show();
// } else if (data === 'page-two') {
// 	$('.page').hide();
// 	$('#insta-page').show();
// } else if (data === 'page-three') {
// 	$('.page').hide();
// 	$('#contact-page').show();
// } else if (data === 'home') {
//       $('.page').hide();
//     }
e.stopPropagation()},!1)}),setInterval(getIGImages,6e4),window.addEventListener("load",getIGImages);/* ----------------------------------------------------------------------------
			FIRST PAGE
---------------------------------------------------------------------------- */
var tl=TweenMax,audioTxt=document.querySelector(".txt"),anim=tl.to(audioTxt,.8,{scaleX:1.2,scaleY:1.2,repeat:-1,yoyo:!0}),icon=document.getElementById("icon");setInterval(function(){$(icon).toggleClass("fa-volume-down fa-volume-up")},800),setTimeout(function(){$("#main-page").show(),$("#load-page").fadeOut(),clearInterval(interval),anim.kill()},4e3);/* ----------------------------------------------------------------------------
			MAP
---------------------------------------------------------------------------- */
var map,currentLocation,infoWindow,myStyles,colors=new Array([62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]),step=0,colorIndices=[0,1,2,3],gradientSpeed=.002,interval=setInterval(updateGradient,10);/* ----------------------------------------------------------------------------
			AUDIO BUTTON
---------------------------------------------------------------------------- */
const audioBtn=document.querySelector(".audio-btn"),player=document.querySelector("#song");var audLoop=document.getElementById("song");audLoop.loop=!0,audLoop.load(),audioBtn.addEventListener("click",function(){var e=document.getElementById("audioIcon");player.paused?(player.play(),$(e).toggleClass("fa-play fa-pause")):(player.pause(),$(e).toggleClass("fa-pause fa-play"))});
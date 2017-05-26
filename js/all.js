function bubble(){++bubbleIndex>textInBubbleArray.length-1&&(bubbleIndex=0),document.getElementById("bubble-div").innerHTML=textInBubbleArray[bubbleIndex].innerHTML,tl.fromTo(chatBubbleWhole,.7,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:1})}/* ----------------------------------------------------------------------------
	NOSE
	- makes the nose and whiskers do a small rotation/shake every 5 seconds
---------------------------------------------------------------------------- */
function noseAnimation(e){setInterval(function(){tl.staggerFromTo(e,.2,{rotation:0,transformOrigin:"center center"},{rotation:10,transformOrigin:"center center",yoyo:!0,repeat:1})},5e3)}function eyeBlink(){eyeBlinkInterval=window.setInterval(function(){tl.fromTo(eyesClosed,.3,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:.2}),tl.fromTo([rightEye,leftEye],.3,{alpha:1},{alpha:0,yoyo:!0,repeat:1,repeatDelay:.2})},4e3)}/* ----------------------------------------------------------------------------
	TAIL IS MOVING
	- makes the cats tail sway
---------------------------------------------------------------------------- */
function tailMoving(){setInterval(function(){tl.staggerFromTo(tailAnimation,1,{rotation:0,transformOrigin:"center center"},{rotation:-25,transformOrigin:"center center",yoyo:!0,repeat:1})},4e3)}function highfivePaw(){tl.fromTo(paw,.3,{scale:1,x:0,y:0},{scale:1.3,x:0,y:-15,yoyo:!0,repeat:1}),tl.fromTo($("#highfive-lines"),.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1}),$("#paw-sound").trigger("load"),$("#paw-sound").trigger("play"),
// PAT THE CAT DB COUNTER
addValue()}function pleasedCat(){tl.staggerFromTo([eyebrowRight,mouthRight],2,{rotation:0,transformOrigin:"center center"},{rotation:-30,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.staggerFromTo([eyebrowLeft,mouthLeft],2,{rotation:0,transformOrigin:"center center"},{rotation:40,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.fromTo([rightEye,leftEye],.5,{alpha:1},{alpha:0,yoyo:!0,repeat:1,repeatDelay:2}),tl.fromTo([eyesClosed],.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:2}),$("#purr").trigger("load"),$("#purr").trigger("play"),
// PAT THE CAT DB COUNTER
addValue()}function angryCat(){window.clearInterval(eyeBlinkInterval),setTimeout(function(){eyeBlink()},4e3),tl.fromTo(semiClosed,.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:2}),tl.staggerFromTo($("#eyebrow-right"),1,{rotation:0,transformOrigin:"center center"},{rotation:-50,transformOrigin:"center center",yoyo:!0,repeat:1,repeatDelay:.5}),tl.staggerFromTo($("#eyebrow-left"),1,{rotation:0,transformOrigin:"center center"},{rotation:60,transformOrigin:"center center",yoyo:!0,repeat:1,repeatDelay:.5})}/* ----------------------------------------------------------------------------
			SCROLL EFFECT TO HASH
---------------------------------------------------------------------------- */
/**
* Scrolls to hash top
* @param {Object} hash
* @param {Object} top
* @return {Object} scrollToHash(hash), new position
*/
function scrollToHash(e){return $("html, body").animate({scrollTop:$(e).offset().top},"slow"),!1}/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
- XMLHttpRequest updates part of the webpage without reloading the page. We
use this for updating the images of instagram page every minute. 
---------------------------------------------------------------------------- */
/**
* Update images from Instagram
* @param {Object} xhr
* @return {Object} getIGImages
*/
function getIGImages(){
// CREATING OBJECT
var e=new XMLHttpRequest;e.open("GET","get_insta.php?foo="+Math.random(),!0),e.addEventListener("readystatechange",function(e){
// readyState PROPERTY IS 4 & status PROPERTY IS 200, RESPONSE IS READY
4===this.readyState&&200===this.status&&(
// IMG AND REPLACE CONTAINER
document.getElementById("img-container").innerHTML=this.responseText,
// LIKE FUNCTION WHEN CLIKCING ON IMG
$(".img-cont").on("click",function(e){$(this).toggleClass("img-like")}))}),e.send()}function audioBtn(){var e=document.getElementById("sound-icon");player.paused?(player.play(),$(e).toggleClass("volume-up volume-off")):(player.pause(),$(e).toggleClass("volume-off volume-up"))}function initMap(){map=new google.maps.Map(document.getElementById("the-map"),{zoom:9,scrollwheel:!1}),infoWindow=new google.maps.InfoWindow;var e;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){
// MY POSITION COORDS
var n={lat:t.coords.latitude,lng:t.coords.longitude};an=google.maps.Animation.DROP,
// MY POSITIONS MARKER
e?e.setPosition(n):e=new google.maps.Marker({position:n,animation:an,map:map}),
// INFO BOX FOR MY POSITION
google.maps.event.addListener(e,"click",function(){var e="<strong>You are here!</strong><br>";infoWindow.setContent(e),infoWindow.open(map,this)}),map.setCenter(n);
// CAT SHELTERS REQUEST
var o={location:n,radius:"50000",keyword:"cat_shelter"};new google.maps.places.PlacesService(map).nearbySearch(o,showPlaces)},function(){handleLocationError(!0,infoWindow,map.getCenter())}):
// BROWSER DO NOT SUPPORT GEOLOCATION
handleLocationError(!1,infoWindow,map.getCenter())}
// THE PLACES
function showPlaces(e,t){if(t==google.maps.places.PlacesServiceStatus.OK)for(var n=0;n<e.length;n++)addMarker(e[n]),console.log(e[n])}
// MARKER/ICON TO PLACES
function addMarker(e){an=google.maps.Animation.DROP;var t=new google.maps.Marker({map:map,animation:an,position:e.geometry.location,icon:"src/img/icon.png"});google.maps.event.addListener(t,"click",function(){var t="<strong>"+e.name+"</strong><br>";t+=e.vicinity,infoWindow.setContent(t),infoWindow.open(map,this)})}
// THE RESULT OF JSON GET VALUE
function result(e){counter.text(e)}
// ADD 1 EACH CLICK ON THE CAT
function addValue(){counter.text(parseInt(counter.text())+1),$.ajax({url:"src/js/db/input.php"}).done().fail(function(e){console.log(e)})}var tl=TweenMax,headLayers=document.getElementById("head-layers"),nose=document.querySelectorAll("#nose path, #nose ellipse"),whiskers=document.querySelectorAll("#whiskers line"),paw=document.getElementById("paw"),catBody=document.getElementById("cat-body"),eyebrowLeft=document.getElementById("eyebrow-left"),eyebrowRight=document.getElementById("eyebrow-right"),mouthRight=document.getElementById("mouth-right"),mouthLeft=document.getElementById("mouth-left"),rightEye=document.getElementById("right-eye"),leftEye=document.getElementById("left-eye"),semiClosed=document.getElementById("semi-closed"),eyesClosed=document.getElementById("eyes-closed"),tails=document.getElementById("tails"),tailAnimation=document.querySelectorAll("#tails path"),chatBubbleWhole=document.getElementsByClassName("svg-bubble"),bubble1=document.getElementById("bubble1"),bubble2=document.getElementById("bubble2"),bubble3=document.getElementById("bubble3"),textInBubbleArray=[bubble1,bubble2,bubble3],bubbleIndex=0;setInterval(bubble,4e3);/* ----------------------------------------------------------------------------
	EYES
	- makes the eyes blink every 4 seconds
---------------------------------------------------------------------------- */
var eyeBlinkInterval;/* ----------------------------------------------------------------------------
	HEAD
	- when document has loaded, the head starts moving to the music 
	- nose+whiskers start twitching
---------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded",function(){tl.fromTo(headLayers,.8,{x:-15,y:0},{x:15,y:0,yoyo:!0,repeat:-1}),noseAnimation(nose),noseAnimation(whiskers),eyeBlink(),tailMoving(),bubble()}),/* ----------------------------------------------------------------------------
	PAW
	- scales the paw and adds highfive lines when user clicks the cats paw
	- triggers and plays highfive sounds
	- adds +1 to the pay the cat counter
---------------------------------------------------------------------------- */
paw.addEventListener("click",highfivePaw),/* ----------------------------------------------------------------------------
	BODY
	- when stroking the cat (clicking on the catBody), the eyebrows rotate
	  and eyes goes from open to closed
	- cat purring sounds triggers and plays
	- adds +1 to the pay the cat counter  
---------------------------------------------------------------------------- */
catBody.addEventListener("click",pleasedCat),/* ----------------------------------------------------------------------------
	TAIL PULL
	- when touching/clicking on the cats tail, the cats eye become semiclosed,
	  and eyebrows rotate to make an angry face
---------------------------------------------------------------------------- */
tails.addEventListener("click",angryCat);/* ----------------------------------------------------------------------------
			IE SETTINGS
---------------------------------------------------------------------------- */
var svgCat=document.getElementById(".svg-cat"),catLogo=document.getElementById(".cat-logotype"),navbar=document.getElementById(".header");navigator.userAgent.match(/Trident\/7\./)&&(svgCat.style.width="100%",svgCat.style.height="100vh",svgCat.style.maxHeight="100vh",catLogo.style.width="50%",catLogo.style.height="30%",navbar=style.marginRight="120px"),
// JQUERY
// if (!!navigator.userAgent.match(/Trident\/7\./)) {
// 	$('.svg-cat').css('width', '100%');
// 	$('.svg-cat').css('height', '100vh');
// 	$('.svg-cat').css('max-height', '100vh');
// 	$('.cat-logotype').css('width', '50%');
// 	$('.cat-logotype').css('height', '30%');
// 	$('.header').css('margin-right', '120px');
// }
/* ----------------------------------------------------------------------------
			LINK HASH
---------------------------------------------------------------------------- */
/**
* Link hash
* @param {Object} links
* @param {Object} data
* @return {Object} scrollToHash(data)
*/
$(function(){for(var e=document.querySelectorAll("a"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=e.target.getAttribute("href");e.preventDefault(),scrollToHash(t),e.stopPropagation()},!1);/**
	* Scroll hash
	* @param {Object} currentHash
	* @param {Object} top
	* @param {Object} distance
	* @return {Object} hash
	*/
var n;$(document).scroll(function(){$(".pages").each(function(){var e=window.pageYOffset,t=e-$(this).offset().top,o=$(this).attr("id");t<30&&t>-30&&n!=o&&(history.pushState(null,null,"#"+o),n=o)})})}),setInterval(getIGImages,6e4),// INTERVAL OF NEW IMAGES EVERY MINUTE
window.addEventListener("load",getIGImages);// FIRST SET OF IMAGES WHEN WINDOW LOADS
/* ----------------------------------------------------------------------------
			INTRO PAGE 
- TweenMax animation on introtext
- toggle between volume icons
- timeout function that clears the intropage and shows the homepage
---------------------------------------------------------------------------- */
var TweenMax,audioTxt=document.querySelector(".pulse-txt"),animTxt=TweenMax.to(audioTxt,.8,{scaleX:1.2,scaleY:1.2,repeat:-1,yoyo:!0}),icon=document.getElementById("icon");setInterval(function(){$(icon).toggleClass("volume-down volume-up")},800);var hide="none",show="block",introPage=document.getElementById("intro-page"),mainPage=document.getElementById("main-page"),soundBtn=document.getElementById("sound-btn"),count=document.getElementById("cnt");setTimeout(function(){if(introPage.style.display=hide,mainPage.style.display=show,animTxt.kill(),soundBtn.style.display=show,count.style.display=show,window.location.hash){scrollToHash(window.location.hash)}},4e3);/* ----------------------------------------------------------------------------
			AUDIO & AUDIO BUTTON
---------------------------------------------------------------------------- */
/**
* Play music
* @param {Object} player
* @param {Object} audioIcon
* @return {Object} audioBtn
*/
const player=document.getElementById("sound");/* ----------------------------------------------------------------------------
			GOOGLE MAP
- initmap() returns the map and its places, users position
---------------------------------------------------------------------------- */
var map,infoWindow,an,counter=$("#counter");$.ajax("src/js/db/output.php").done(function(e){result(JSON.parse(e)[0].value)});
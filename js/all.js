/* PROBLEM:
1. svansen blir ful när den animeras. går detta att lösa på något sätt?
2. ögonblinkningen var 3e sekund krockar med andra funktioner som påverkar ögonen. hur fixa?
3. ögonbrynsrotationen på rad ~95-96 funkar inte
4. de olika animationerna krockar, tex klappa kropp, svans och blinkning
5. ljudeffekterna funkar inte
6. kattens huvud åker ur viewbox
*/
//makes the nose and whiskers do a small rotation/shake every 5 seconds
function noseAnimation(e){setInterval(function(){tl.staggerFromTo(e,.2,{rotation:0,transformOrigin:"center center"},{rotation:10,transformOrigin:"center center",yoyo:!0,repeat:1})},5e3)}
//makes the eyes blink every 4 seconds
function eyeBlink(){testtest=window.setInterval(function(){tl.fromTo(eyesClosed,.3,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:.2}),tl.fromTo([rightEye,leftEye],.3,{alpha:1},{alpha:0,yoyo:!0,repeat:1,repeatDelay:.2})},4e3)}
//makes the chatbubble appear every 8 seconds
function chatbubblePop(){setInterval(function(){tl.fromTo(chatbubble,.7,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:1})},8e3)}
//when touching/clicking on the cats tail
function angryCat(){window.clearInterval(testtest),setTimeout(function(){eyeBlink()},3e3),tl.fromTo(semiClosed,.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:2}),tl.staggerFromTo($("#eyebrowRight"),1,{rotation:0,transformOrigin:"center center"},{rotation:-50,transformOrigin:"center center",yoyo:!0,repeat:1,repeatDelay:.5}),tl.staggerFromTo($("#eyebrowLeft"),1,{rotation:0,transformOrigin:"center center"},{rotation:60,transformOrigin:"center center",yoyo:!0,repeat:1,repeatDelay:.5})}function initMap(){map=new google.maps.Map(document.getElementById("map"),{zoom:12}),infoWindow=new google.maps.InfoWindow;var e;navigator.geolocation?navigator.geolocation.watchPosition(function(t){//getCurrentPosition
// MY POSITION COORDS
var o={lat:t.coords.latitude,lng:t.coords.longitude},n=google.maps.Animation.DROP;e?e.setPosition(o):e=new google.maps.Marker({position:o,animation:n,map:map}),
// INFO BOX FOR MY POSITION
google.maps.event.addListener(e,"click",function(){var e="<strong>You are here!</strong><br>";infoWindow.setContent(e),infoWindow.open(map,this)}),map.setCenter(o);var a={location:o,radius:"50000",keyword:"cat_shelter"};new google.maps.places.PlacesService(map).nearbySearch(a,showPlaces)},function(){handleLocationError(!0,infoWindow,map.getCenter())}):
// BROWSER DO NOT SUPPORT GEOLOCATION
handleLocationError(!1,infoWindow,map.getCenter())}function showPlaces(e,t){if(t==google.maps.places.PlacesServiceStatus.OK)for(var o=0;o<e.length;o++)addMarker(e[o]),console.log(e[o])}function addMarker(e){var t=google.maps.Animation.DROP,o=new google.maps.Marker({map:map,animation:t,position:e.geometry.location,icon:"../src/img/icon.png"});google.maps.event.addListener(o,"click",function(){var t="<strong>"+e.name+"</strong><br>";t+=e.vicinity,infoWindow.setContent(t),infoWindow.open(map,this)})}/* ----------------------------------------------------------------------------
			SCROLL EFFECT
---------------------------------------------------------------------------- */
function scrollOne(){return $("html, body").animate({scrollTop:$("#home-page").offset().top},"slow"),!1}function scrollTwo(){return $("html, body").animate({scrollTop:$("#insta-page").offset().top},"slow"),!1}function scrollThree(){return $("html, body").animate({scrollTop:$("#contact-page").offset().top},"slow"),!1}/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
---------------------------------------------------------------------------- */
function getIGImages(){var e=new XMLHttpRequest;e.open("GET","getIGdata.php",!0),e.addEventListener("load",function(e){console.log(this.responseText),document.getElementById("img-container").innerHTML=this.responseText}),e.send()}function updateGradient(){if(void 0!==$){var e=colors[colorIndices[0]],t=colors[colorIndices[1]],o=colors[colorIndices[2]],n=colors[colorIndices[3]],a=1-step,r=Math.round(a*e[0]+step*t[0]),l=Math.round(a*e[1]+step*t[1]),i=Math.round(a*e[2]+step*t[2]),s="rgba("+r+","+l+","+i+",0.3)",c=Math.round(a*o[0]+step*n[0]),d=Math.round(a*o[1]+step*n[1]),m=Math.round(a*o[2]+step*n[2]),p="rgba("+c+","+d+","+m+",0.3)";$("#load-page").css({background:"-webkit-gradient(linear, left top, right top, from("+s+"), to("+p+"))"}).css({background:"-moz-linear-gradient(left, "+s+" 0%, "+p+" 100%)"}),step+=gradientSpeed,step>=1&&(step%=1,colorIndices[0]=colorIndices[1],colorIndices[2]=colorIndices[3],
//pick two new target color indices
//do not pick the same as the current one
colorIndices[1]=(colorIndices[1]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length,colorIndices[3]=(colorIndices[3]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length)}}var tl=TweenMax,headLayers=document.getElementById("headLayers"),nose=document.querySelectorAll("#nose path, #nose ellipse"),whiskers=document.querySelectorAll("#whiskers line"),paw=document.getElementById("paw"),highfiveLines=document.querySelectorAll("#highfiveLines path"),body=document.getElementById("body"),eyebrowLeft=document.getElementById("eyebrowLeft"),eyebrowRight=document.getElementById("eyebrowRight"),mouthRight=document.getElementById("mouthRight"),mouthLeft=document.getElementById("mouthLeft"),rightEye=document.getElementById("rightEye"),leftEye=document.getElementById("leftEye"),semiClosed=document.getElementById("semiClosed"),eyesClosed=document.getElementById("eyesClosed"),tails=document.getElementById("tails"),tailAnimation=document.querySelectorAll("#tails path"),chatbubble=document.getElementsByClassName("svg-bubble"),testtest;
//when document has loaded, the head starts moving to the music and nose+whiskers start twitching
$(document).ready(function(){tl.fromTo(headLayers,.8,{x:-15,y:0},{x:15,y:0,yoyo:!0,repeat:-1}),noseAnimation(nose),noseAnimation(whiskers),eyeBlink(),chatbubblePop()}),
//scales the cats paw when user clicks it, making it look like a high five
paw.addEventListener("click",function(){tl.fromTo(paw,.3,{scale:1,x:0,y:0},{scale:1.3,x:0,y:-15,yoyo:!0,repeat:1}),tl.fromTo($("#highfiveLines"),.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1})}),
//when stroking the cat (clicking on the body) 
body.addEventListener("click",function(){tl.staggerFromTo([eyebrowRight,mouthRight],2,{rotation:0,transformOrigin:"center center"},{rotation:-30,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.staggerFromTo([eyebrowLeft,mouthLeft],2,{rotation:0,transformOrigin:"center center"},{rotation:40,transformOrigin:"center center",yoyo:!0,repeat:1}),tl.fromTo([rightEye,leftEye],.5,{alpha:1},{alpha:0,yoyo:!0,repeat:1,repeatDelay:2}),tl.fromTo([eyesClosed],.5,{alpha:0},{alpha:1,yoyo:!0,repeat:1,repeatDelay:2}),new Audio("../catpurr.mp3").play()}),tails.addEventListener("click",angryCat);var currentLocation,infoWindow,links=document.querySelectorAll("h2");links.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.getAttribute("class");e.preventDefault(),history.replaceState(null,null,t),
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
var tl=TweenMax,audioTxt=document.querySelector(".txt"),anim=tl.to(audioTxt,.8,{scaleX:1.2,scaleY:1.2,repeat:-1,yoyo:!0}),icon=document.getElementById("icon");setInterval(function(){$(icon).toggleClass("fa-volume-down fa-volume-up")},800),
// UNDER TIDEN - RADERA EJ DETTA!!
setTimeout(function(){$("#main-page").show(),$("#load-page").fadeOut(),clearInterval(interval),anim.kill(),$("#show-btn").fadeIn("slow")},4e3);/* ----------------------------------------------------------------------------
			BACKGROUND COLOR FADE ANIMATION
---------------------------------------------------------------------------- */
var colors=new Array([62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]),step=0,colorIndices=[0,1,2,3],gradientSpeed=.002,interval=setInterval(updateGradient,10);/* ----------------------------------------------------------------------------
			AUDIO BUTTON
---------------------------------------------------------------------------- */
const audioBtn=document.querySelector(".audio-btn"),player=document.querySelector("#song");var audLoop=document.getElementById("song");audLoop.loop=!0,audLoop.load(),audioBtn.addEventListener("click",function(){var e=document.getElementById("audioIcon");player.paused?(player.play(),$(e).toggleClass("fa-play fa-pause")):(player.pause(),$(e).toggleClass("fa-pause fa-play"))});
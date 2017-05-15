function initMap(){map=new google.maps.Map(document.getElementById("map"),{zoom:12}),infoWindow=new google.maps.InfoWindow;var o;navigator.geolocation?navigator.geolocation.watchPosition(function(e){//getCurrentPosition
// MY POSITION COORDS
var n={lat:e.coords.latitude,lng:e.coords.longitude},t=google.maps.Animation.DROP;o?o.setPosition(n):o=new google.maps.Marker({position:n,animation:t,map:map}),
// INFO BOX FOR MY POSITION
google.maps.event.addListener(o,"click",function(){var o="<strong>You are here!</strong><br>";infoWindow.setContent(o),infoWindow.open(map,this)}),map.setCenter(n);var a={location:n,radius:"50000",keyword:"cat_shelter"};new google.maps.places.PlacesService(map).nearbySearch(a,showPlaces)},function(){handleLocationError(!0,infoWindow,map.getCenter())}):
// BROWSER DO NOT SUPPORT GEOLOCATION
handleLocationError(!1,infoWindow,map.getCenter())}function showPlaces(o,e){if(e==google.maps.places.PlacesServiceStatus.OK)for(var n=0;n<o.length;n++)addMarker(o[n]),console.log(o[n])}function addMarker(o){var e=google.maps.Animation.DROP,n=new google.maps.Marker({map:map,animation:e,position:o.geometry.location,icon:"../src/img/icon.png"});google.maps.event.addListener(n,"click",function(){var e="<strong>"+o.name+"</strong><br>";e+=o.vicinity,infoWindow.setContent(e),infoWindow.open(map,this)})}/* ----------------------------------------------------------------------------
			SCROLL EFFECT
---------------------------------------------------------------------------- */
function scrollOne(){return $("html, body").animate({scrollTop:$("#home-page").offset().top},"slow"),!1}function scrollTwo(){return $("html, body").animate({scrollTop:$("#insta-page").offset().top},"slow"),!1}function scrollThree(){return $("html, body").animate({scrollTop:$("#contact-page").offset().top},"slow"),!1}/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
---------------------------------------------------------------------------- */
function getIGImages(){var o=new XMLHttpRequest;o.open("GET","getIGdata.php",!0),o.addEventListener("load",function(o){console.log(this.responseText),document.getElementById("img-container").innerHTML=this.responseText}),o.send()}function updateGradient(){if(void 0!==$){var o=colors[colorIndices[0]],e=colors[colorIndices[1]],n=colors[colorIndices[2]],t=colors[colorIndices[3]],a=1-step,r=Math.round(a*o[0]+step*e[0]),i=Math.round(a*o[1]+step*e[1]),l=Math.round(a*o[2]+step*e[2]),s="rgba("+r+","+i+","+l+",0.3)",c=Math.round(a*n[0]+step*t[0]),d=Math.round(a*n[1]+step*t[1]),p=Math.round(a*n[2]+step*t[2]),g="rgba("+c+","+d+","+p+",0.3)";$("#load-page").css({background:"-webkit-gradient(linear, left top, right top, from("+s+"), to("+g+"))"}).css({background:"-moz-linear-gradient(left, "+s+" 0%, "+g+" 100%)"}),step+=gradientSpeed,step>=1&&(step%=1,colorIndices[0]=colorIndices[1],colorIndices[2]=colorIndices[3],
//pick two new target color indices
//do not pick the same as the current one
colorIndices[1]=(colorIndices[1]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length,colorIndices[3]=(colorIndices[3]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length)}}var currentLocation,infoWindow,links=document.querySelectorAll("h2");links.forEach(function(o){o.addEventListener("click",function(o){var e=o.target.getAttribute("class");o.preventDefault(),history.replaceState(null,null,e),
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
o.stopPropagation()},!1)}),setInterval(getIGImages,6e4),window.addEventListener("load",getIGImages);/* ----------------------------------------------------------------------------
			FIRST PAGE
---------------------------------------------------------------------------- */
var tl=TweenMax,audioTxt=document.querySelector(".txt"),anim=tl.to(audioTxt,.8,{scaleX:1.2,scaleY:1.2,repeat:-1,yoyo:!0}),icon=document.getElementById("icon");setInterval(function(){$(icon).toggleClass("fa-volume-down fa-volume-up")},800);
// UNDER TIDEN - RADERA EJ DETTA!!
// setTimeout(function() {
// 	$('#main-page').show();
// 	$('#load-page').fadeOut();
// 	clearInterval(interval);
// 	anim.kill();
// 	$('#show-btn').fadeIn('slow');
// }, 4000);
/* ----------------------------------------------------------------------------
			BACKGROUND COLOR FADE ANIMATION
---------------------------------------------------------------------------- */
var colors=new Array([62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]),step=0,colorIndices=[0,1,2,3],gradientSpeed=.002,interval=setInterval(updateGradient,10);/* ----------------------------------------------------------------------------
			AUDIO BUTTON
---------------------------------------------------------------------------- */
const audioBtn=document.querySelector(".audio-btn"),player=document.querySelector("#song");var audLoop=document.getElementById("song");audLoop.loop=!0,audLoop.load(),audioBtn.addEventListener("click",function(){var o=document.getElementById("audioIcon");player.paused?(player.play(),$(o).toggleClass("fa-play fa-pause")):(player.pause(),$(o).toggleClass("fa-pause fa-play"))});
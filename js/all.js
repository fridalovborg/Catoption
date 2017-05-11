/* ----------------------------------------------------------------------------
			HISTORY LINK
---------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------
			SCROLL EFFECT
---------------------------------------------------------------------------- */
function scrollOne(){return $("html, body").animate({scrollTop:$("#home-page").offset().top},"slow"),!1}function scrollTwo(){return $("html, body").animate({scrollTop:$("#insta-page").offset().top},"slow"),!1}function scrollThree(){return $("html, body").animate({scrollTop:$("#contact-page").offset().top},"slow"),!1}/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
---------------------------------------------------------------------------- */
function getIGImages(){var e=new XMLHttpRequest;e.open("GET","getIGdata.php",!0),e.addEventListener("load",function(e){console.log(this.responseText),document.getElementById("img-container").innerHTML=this.responseText}),e.send()}function updateGradient(){if(void 0!==$){var e=colors[colorIndices[0]],o=colors[colorIndices[1]],t=colors[colorIndices[2]],n=colors[colorIndices[3]],r=1-step,s=Math.round(r*e[0]+step*o[0]),l=Math.round(r*e[1]+step*o[1]),a=Math.round(r*e[2]+step*o[2]),c="rgba("+s+","+l+","+a+",0.2)",d=Math.round(r*t[0]+step*n[0]),i=Math.round(r*t[1]+step*n[1]),p=Math.round(r*t[2]+step*n[2]),g="rgba("+d+","+i+","+p+",0.2)";$("#load-page").css({background:"-webkit-gradient(linear, left top, right top, from("+c+"), to("+g+"))"}).css({background:"-moz-linear-gradient(left, "+c+" 0%, "+g+" 100%)"}),step+=gradientSpeed,step>=1&&(step%=1,colorIndices[0]=colorIndices[1],colorIndices[2]=colorIndices[3],
//pick two new target color indices
//do not pick the same as the current one
colorIndices[1]=(colorIndices[1]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length,colorIndices[3]=(colorIndices[3]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length)}}var links=document.querySelectorAll("h2");links.forEach(function(e){e.addEventListener("click",function(e){var o=e.target.getAttribute("class");e.preventDefault(),history.replaceState(null,null,o),
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
			BACKGROUND COLOR FADE ANIMATION
---------------------------------------------------------------------------- */
var colors=new Array([62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]),step=0,colorIndices=[0,1,2,3],gradientSpeed=.002;setInterval(updateGradient,10);
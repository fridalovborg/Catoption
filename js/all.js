//SCROLL EFFECT, change later...
function scrollOne(){return $("html, body").animate({scrollTop:$("#onePage").offset().top},"slow"),!1}function scrollTwo(){return $("html, body").animate({scrollTop:$("#secondPage").offset().top},"slow"),!1}function scrollThree(){return $("html, body").animate({scrollTop:$("#thirdPage").offset().top},"slow"),!1}var links=document.querySelectorAll("h2");links.forEach(function(t){t.addEventListener("click",function(t){var o=t.target.getAttribute("class");t.preventDefault(),history.replaceState(null,null,o),
//byt ut mot data-page ...någonting!
// if(data === 'page-one') {
// 	$('.page').hide();
// 	$('#onePage').show();
// } else if (data === 'page-two') {
// 	$('.page').hide();
// 	$('#secondPage').show();
// } else if (data === 'page-three') {
// 	$('.page').hide();
// 	$('#thirdPage').show();
// } else if (data === 'home') {
//       $('.page').hide();
//     }
t.stopPropagation()},!1)});
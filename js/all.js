var links=document.querySelectorAll("h2");links.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.getAttribute("id");e.preventDefault(),history.replaceState(null,null,t),
//byt ut mot data-page ...någonting!
"page-one"===t?($(".page").hide(),$("#onePage").show()):"page-two"===t?($(".page").hide(),$("#secondPage").show()):"page-three"===t?($(".page").hide(),$("#thirdPage").show()):"home"===t&&$(".page").hide(),e.stopPropagation()},!1)});
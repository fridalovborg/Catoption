var links = document.querySelectorAll('h2');
links.forEach(function(link) {

	link.addEventListener('click', function(e) {
		var data = e.target.getAttribute('class');
	    e.preventDefault();

			history.replaceState(null, null, data);

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
		e.stopPropagation();
	}, false);
});

//SCROLL EFFECT, change later...
function scrollOne() {
    $('html, body').animate({ scrollTop: $('#onePage').offset().top }, 'slow');
    return false;
}

function scrollTwo() {
    $('html, body').animate({ scrollTop: $('#secondPage').offset().top }, 'slow');
    return false;
}

function scrollThree() {
    $('html, body').animate({ scrollTop: $('#thirdPage').offset().top }, 'slow');
    return false;
}
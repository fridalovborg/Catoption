/* ----------------------------------------------------------------------------
			HISTORY LINK
---------------------------------------------------------------------------- */
var links = document.querySelectorAll('h2');

links.forEach(function(link) {

	link.addEventListener('click', function(e) {
		var data = e.target.getAttribute('class');
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
			// 	$('#contact-page').show();
			// } else if (data === 'home') {
//       $('.page').hide();
//     }
		e.stopPropagation();
	}, false);
});

/* ----------------------------------------------------------------------------
			SCROLL EFFECT
---------------------------------------------------------------------------- */
function scrollOne() {
    $('html, body').animate({ scrollTop: $('#home-page').offset().top }, 'slow');
    return false;
}

function scrollTwo() {
    $('html, body').animate({ scrollTop: $('#insta-page').offset().top }, 'slow');
    return false;
}

function scrollThree() {
    $('html, body').animate({ scrollTop: $('#contact-page').offset().top }, 'slow');
    return false;
}
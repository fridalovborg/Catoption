/* ----------------------------------------------------------------------------
			SCROLL EFFECT
---------------------------------------------------------------------------- */
function navHome() {
    $('html, body').animate({ scrollTop: $('#home-page').offset().top }, 'slow');
    return false;
}

function navInsta() {
    $('html, body').animate({ scrollTop: $('#insta-page').offset().top }, 'slow');
    return false;
}

function navMap() {
    $('html, body').animate({ scrollTop: $('#map-page').offset().top }, 'slow');
    return false;
}

/* ----------------------------------------------------------------------------
			HISTORY LINK - TODO: SLÅ SAMMAN MED SCROLL EFFECT
---------------------------------------------------------------------------- */
$(function () {

	// BEHÖVS EJ LÄNGRE???
	// Gör dock att en kan backa och gå framåt...

	// var links = document.querySelectorAll('href');

	// for (var i = 0; i < links.length; i++) {
	// 	links[i].addEventListener('click', function(e) {
	// 		var data = e.target.getAttribute('href');
	// 	    e.preventDefault();
	// 		history.replaceState(null, null, data);

	// 		e.stopPropagation();
	// 	}, false);
	// }

    var currentHash = '#home';
    
    $(document).scroll(function () {
        $('.pages').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            // var hash = $(this).attr('href');
            var hash = $(this).attr('data-anchor');

            if (distance < 30 && distance > -30 && currentHash != hash) {
                // console.log(hash);
                history.replaceState(null, null, hash);
                currentHash = hash;
            }
        });
    });
});

/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
- XMLHttpRequest updates part of the webpage without reloading the page. We
use this for updating the images of instagram page every minute. 
---------------------------------------------------------------------------- */
function getIGImages() {
	// CREATING OBJECT
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "getIGdata.php?foo="+Math.random(), true);

	xhr.addEventListener('readystatechange', function(e) {
		console.log(this);
		// readyState PROPERTY IS 4 & status PROPERTY IS 200, RESPONSE IS READY
		if (this.readyState === 4 && this.status === 200) {
			// IMG AND REPLACE CONTAINER
			document.getElementById('img-container').innerHTML = this.responseText;

			// LIKE FUNCTION WHEN CLIKCING ON IMG
			$('.img-cont').on('click',function (event) {
		        $(this).toggleClass('img-like');
		    });
		}
	}); 
	xhr.send();
}
setInterval(getIGImages, 60000); // INTERVAL OF NEW IMAGES EVERY MINUTE
window.addEventListener('load', getIGImages); // FIRST SET OF IMAGES WHEN WINDOW LOADS

/* ----------------------------------------------------------------------------
			INTRO PAGE 
- TweenMax animation on introtext
- toggle between volume icons
- timeout function that clears the intropage and shows the homepage
---------------------------------------------------------------------------- */
var audioTxt = document.querySelector('.pulse-txt');
var animTxt = TweenMax.to(audioTxt, 0.8, {scaleX: 1.2, scaleY: 1.2, repeat: -1, yoyo: true});

// INTERVAL OF VOLUME ICON
var icon = document.getElementById('icon');
iconInterval = setInterval(function() {
	$(icon).toggleClass("fa-volume-down fa-volume-up");
}, 800);

setTimeout(function() {
	$('#intro-page').hide();
	$('#main-page').show();
	clearInterval(iconInterval);
	animTxt.kill(); 
	$('#sound-btn').fadeIn('slow');
	$('#cnt').fadeIn('slow');
}, 4000);

/* ----------------------------------------------------------------------------
			AUDIO & AUDIO BUTTON
---------------------------------------------------------------------------- */
const player = document.querySelector('#sound');

function audioBtn() {
	if ($(window).width() < 740) {
	   player.play();
	}

	var audioIcon = document.getElementById('sound-icon');

	if(!player.paused) {
		player.pause();
		$(audioIcon).toggleClass("fa-volume-off fa-volume-up");
	} else {
		player.play();
		$(audioIcon).toggleClass("fa-volume-up fa-volume-off");
	}
};
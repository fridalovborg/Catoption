/* ----------------------------------------------------------------------------
			LINK HASH
---------------------------------------------------------------------------- */
/**
* Link hash
* @param {Object} links
* @param {Object} data
* @return {Object} scrollToHash(data)
*/
$(function () {
	var links = document.querySelectorAll('a');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(e) {
			var data = e.target.getAttribute('href');
		    e.preventDefault();
			scrollToHash(data);
			e.stopPropagation();
		}, false);
	}

	/**
	* Scroll hash
	* @param {Object} currentHash
	* @param {Object} top
	* @param {Object} distance
	* @return {Object} hash
	*/
    var currentHash;
    $(document).scroll(function () {
        $('.pages').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            var hash = $(this).attr('id');

            if (distance < 30 && distance > -30 && currentHash != hash) {
                history.pushState(null, null, '#' + hash);
                currentHash = hash;
            }
        });
    });
});

/* ----------------------------------------------------------------------------
			SCROLL EFFECT TO HASH
---------------------------------------------------------------------------- */
/**
* Scrolls to hash top
* @param {Object} hash
* @param {Object} top
* @return {Object} scrollToHash(hash), new position
*/
function scrollToHash(hash) {
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 'slow');
    return false;
}

/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
- XMLHttpRequest updates part of the webpage without reloading the page. We
use this for updating the images of instagram page every minute. 
---------------------------------------------------------------------------- */
/**
* Update images from Instagram
* @param {Object} xhr
* @return {Object} getIGImages
*/
function getIGImages() {
	// CREATING OBJECT
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'get_insta.php?foo='+Math.random(), true);

	xhr.addEventListener('readystatechange', function(e) {
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
var TweenMax;
var audioTxt = document.querySelector('.pulse-txt');
var animTxt = TweenMax.to(audioTxt, 0.8, {scaleX: 1.2, scaleY: 1.2, repeat: -1, yoyo: true});

// INTERVAL OF VOLUME ICON
var icon = document.getElementById('icon');
setInterval(function() {
	$(icon).toggleClass('volume-down volume-up');
}, 800);

var hide = "none",
show = "block",
introPage = document.getElementById('intro-page'),
mainPage = document.getElementById('main-page'),
soundBtn = document.getElementById('sound-btn'),
count = document.getElementById('cnt');

setTimeout(function() {
	introPage.style.display = hide;
	mainPage.style.display = show;
	animTxt.kill();
	soundBtn.style.display = show;
	count.style.display = show;

// $('#intro-page').hide();
// $('#main-page').show();
// animTxt.kill(); 
// $('#sound-btn').fadeIn('slow');
// $('#cnt').fadeIn('slow');

	var scrollto = window.location.hash;
	scrollToHash(scrollto);
}, 4000);

/* ----------------------------------------------------------------------------
			AUDIO & AUDIO BUTTON
---------------------------------------------------------------------------- */
/**
* Play music
* @param {Object} player
* @param {Object} audioIcon
* @return {Object} audioBtn
*/
const player = document.querySelector('#sound');
function audioBtn() {
	if ($(window).width() < 740) {
	   player.play();
	}

	var audioIcon = document.getElementById('sound-icon');

	if(!player.paused) {
		player.pause();
		$(audioIcon).toggleClass('volume-off volume-up');
	} else {
		player.play();
		$(audioIcon).toggleClass('volume-up volume-off');
	}
}
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

    var currentHash = "#home";
    
    $(document).scroll(function () {
        $('.pages').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            // var hash = $(this).attr('href');
            var hash = $(this).attr('data-anchor');

            if (distance < 30 && distance > -30 && currentHash != hash) {
                console.log(hash);
                history.replaceState(null, null, hash);
                currentHash = hash;
            }
        });
    });
});

/* ----------------------------------------------------------------------------
			UPDATE IMAGES IN REALTIME
---------------------------------------------------------------------------- */
function getIGImages() {

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "getIGdata.php?foo="+Math.random(), true);

	xhr.addEventListener('readystatechange', function(e) {
		console.log(this);

	if (this.readyState === 4 && this.status === 200) {

		document.getElementById('img-container').innerHTML = this.responseText;
		}
		
	});

	xhr.send();
}
setInterval(getIGImages, 60000);
window.addEventListener('load', getIGImages);

/* ----------------------------------------------------------------------------
			FIRST PAGE
---------------------------------------------------------------------------- */
var tl = TweenMax;
var audioTxt = document.querySelector('.pulse-txt');
var anim = tl.to(audioTxt, 0.8, {scaleX: 1.2, scaleY: 1.2, repeat: -1, yoyo: true});

var icon = document.getElementById('icon');
setInterval(function() {
	$(icon).toggleClass("fa-volume-down fa-volume-up");
}, 800);

// Kommentar UNDER TIDEN - RADERA EJ DETTA!!
// setTimeout(function() {
// 	$('#main-page').show();
// 	$('#intro-page').fadeOut();
// 	//clearInterval(interval);
// 	anim.kill();
// 	$('#sound-btn').fadeIn('slow');
// 	$('#cnt').fadeIn('slow');
// }, 4000);

/* ----------------------------------------------------------------------------
			AUDIO BUTTON
---------------------------------------------------------------------------- */
const audioBtn = document.querySelector('.audio-btn'); // knappen som ska slå av/på bakgrundsmusiken
const player = document.querySelector('#sound'); // audio-elementet med ljufilen 
player.play(); // Testa om musiken är på från början nu i mobil? Pga blev tvärt om i mobilen.  

//var audLoop = document.getElementById('sound'); // Byta ut till player?  eller ta bort helt
//audLoop.loop = true;
//audLoop.load();

audioBtn.addEventListener('click', function() {

	var audioIcon = document.getElementById('sound-icon');

	if(!player.paused) {
		player.pause();
		$(audioIcon).toggleClass("fa-volume-off fa-volume-up");
	} else {
		player.play();
		$(audioIcon).toggleClass("fa-volume-up fa-volume-off");
	}
});

/* ----------------------------------------------------------------------------
			IMG LIKE WHEN CLICK
---------------------------------------------------------------------------- */
function test() {
	$(document).on('click', function (event) {
         $target = $(event.target);   
            $target.addClass('img-like'); // CHANGE TO HEART
    });
}
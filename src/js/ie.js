/* ----------------------------------------------------------------------------
			IE SETTINGS
---------------------------------------------------------------------------- */
var svgCat = document.getElementById('svg-cat'),
catLogo = document.getElementById('cat-logotype'),
navbar = document.getElementById('header');

if (!!navigator.userAgent.match(/Trident\/7\./)) {
	svgCat.style.width = '100%';
	svgCat.style.height = '100vh';
	svgCat.style.maxHeight = '100vh';
	catLogo.style.width = '50%';
	catLogo.style.height = '30%';
	navbar = style.marginRight = '120px';
}

// JQUERY
// if (!!navigator.userAgent.match(/Trident\/7\./)) {
// 	$('.svg-cat').css('width', '100%');
// 	$('.svg-cat').css('height', '100vh');
// 	$('.svg-cat').css('max-height', '100vh');
// 	$('.cat-logotype').css('width', '50%');
// 	$('.cat-logotype').css('height', '30%');
// 	$('.header').css('margin-right', '120px');
// }
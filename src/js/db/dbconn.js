/* ----------------------------------------------------------------------------
			AJAX DATABASE CONNECTION GET AND POST
---------------------------------------------------------------------------- */
var counter = $('#counter');
 
$.ajax('src/js/db/output.php').done(function(data) {
	var json = JSON.parse(data)[0].value;
	result(json);
});

// THE RESULT OF JSON GET VALUE
function result(json) {
	counter.text(json);
}

// ADD 1 EACH CLICK ON THE CAT
function addValue() {
	counter.text(parseInt(counter.text()) + 1);

	$.ajax({
		url :'src/js/db/input.php'
	}).done().fail(function(xhr){
		console.log(xhr);
	});
}
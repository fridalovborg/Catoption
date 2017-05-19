// console.log('tja');
var counter = $('#counter');
 
$.ajax('src/js/db/output.php').done(function(data) {
	var json = JSON.parse(data)[0].value;
	resault(json);
});

function resault(json) {
	counter.text(json);
}

function addValue() {

	//console.log('funkar');
	counter.text(parseInt(counter.text()) + 1);

	$.ajax({
		url :'src/js/db/input.php'
	}).done().fail(function(xhr){
		console.log(xhr);
	});
}
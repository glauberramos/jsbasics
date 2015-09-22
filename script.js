var root = 'http://jsonplaceholder.typicode.com';

var console = {
	log: function(data) {
		$('#result').html(JSON.stringify(data));
	}
};

$(function() {
	$('#button').click(function() {
		 eval($('textarea').val());
	});
});
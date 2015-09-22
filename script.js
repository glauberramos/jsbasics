var root = 'http://jsonplaceholder.typicode.com';

var console = {
	log: function(data) {
		$('#result').append(JSON.stringify(data));
		$('#result').append('<br>');
	}
};

$(function() {
	$('#button').click(function() {
		$('#result').html('');
		try {
			var result = eval($('textarea').val());
			$('#result').append(result);

			if(result === false) {
				$('#result').append('false');				
			}
		} catch (e) {
		    $('#result').append(e.message);
		}
	});
});
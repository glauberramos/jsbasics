var console = {
	log: function(data) {
		$('#result').append(JSON.stringify(data));
		$('#result').append('<br>');
	}
};

var codes = {
	'Exercicío 1': 'function say() {\n\
  return \'Person says hello\'; \n\
};\n\n\
say();',
	'Exercicío 2': 'blablabla'
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

	$('select').change(function() {
		$('#editor').html('');
		$('#editor').append(codes[$('select').val()]); 
	});
});
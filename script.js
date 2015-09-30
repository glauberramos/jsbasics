var console = {
	log: function(data) {
		$('#result').append(JSON.stringify(data));
		$('#result').append('<br>');
	}
};

var codes = {
	'Exercicío 1': 'function say() {\n\
  return \'Person says hello!\'; \n\
};\n\n\
say();',
	'Exercicío 2': 'var car = { \n\
  distanciaPercorrida: 100\n\
};\n\n\
console.log(car.distanciaPercorrida);',
    'Exercicío 3': 'function Person(first, last) {\n\
  var firstName = first;\n\
  var lastName = last;\n\n\
  var publicApi = {};\n\n\
  publicApi.fullName = function() {\n\
    return firstName + \' \' + lastName;\n\
  }\n\n\
  return publicApi;\n\
}\n\n\
var glauber = new Person(\'Glauber\', \'Ramos\');\n\
console.log(glauber.fullName());'
};

$(function() {
	$('#select').on('change', function() {
		$('textarea').html('');
		$('textarea').val('');
		$('textarea').append(codes[$('select').val()]); 
		$('textarea').val(codes[$('select').val()]);
	});

	$('#button').on('click', function() {
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
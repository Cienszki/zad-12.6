var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();

	if(!countryName.length) {
		countryName = 'Poland';
	}

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList,
		statusCode: {
			404: function() {
				countriesList.empty();
				$('<li>').text("No countries match that name").appendTo(countriesList);	
			}
		}
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
	});
}
// jak dodac inne info? moge napisac 2gi $.ajax ale to mi nadpisze stolicami nazwy panstw albo wyswietli druga liste ponizej a chcialbym kraj i stolice w jednym <li>
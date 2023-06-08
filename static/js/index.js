document.getElementById('country-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var countryName = document.getElementById('country-name').value;
  var url = 'https://restcountries.com/v3.1/name/' + countryName;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var country = data[0];
      
      document.getElementById('flag').innerHTML = '<img src="' + country.flags.png + '" alt="Country Flag">';
      document.getElementById('coat-of-arms').innerHTML = '<img src="' + country.flags.svg + '" alt="Coat of Arms">';
      
      var currencyTypes = Object.values(country.currencies).map(currency => currency.name);
      document.getElementById('currency').textContent = 'Currency: ' + currencyTypes.join(', ');
      
      
      document.getElementById('capital').textContent = 'Capital: ' + country.capital.join(',');
      
      var languages = Object.values(country.languages).map(language => language);
      document.getElementById('languages').textContent = 'Languages: ' + languages.join(', ');
      
      

    })
    .catch(error => {
      console.log('Error:', error);
    });
});
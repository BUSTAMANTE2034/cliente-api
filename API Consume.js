// Ejemplo de solicitud general en JavaScript utilizando Fetch API
fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=10")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Ejemplo de solicitud para atributos específicos
fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-01-01&minmagnitude=5")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

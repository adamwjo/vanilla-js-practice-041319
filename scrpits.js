const url = 'http://api.openweathermap.org/data/2.5/weather?id=';
const apiKey = '6af3559efd69a77f75a44e63972b2b2f';


fetch(url + '2172797' + '&appid=' + apiKey)
    .then(response => response.json())
    .then(response => console.log(response))
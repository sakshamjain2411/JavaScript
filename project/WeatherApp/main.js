console.log("Resource main.js loaded");
const apik = "3045dd712ffe6e702e3245525ac7fa38";
let city = 'jaipur';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apik}`)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']
        console.log(nameval);
        console.log(descrip);
        console.log(tempature);
        console.log(wndspd);
        // city.innerHTML=`City: ${nameval}`
        // temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
        // description.innerHTML = `Conditions: ${descrip}`
        // wind.innerHTML = `Wind Speed: ${wndspd} km/h`

    })
    .catch(err => alert('You entered Wrong city name'))
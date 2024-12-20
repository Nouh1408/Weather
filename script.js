 

    const findLocation = document.getElementById("Location")


    findLocation.addEventListener('input',function(e){
        console.log(e.target.value);
        getData(e.target.value)
        
    })
    async function getData(city){
        if(city.length>2){
            let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=3&key=e04c1d3c724f4dedb9a171901241812`)
        // console.log(response);
        let data =await response.json()
        console.log(data);
        display(data)
        }
        
        
    }
   
    function display(data) {
        //today
        let today = new Date(data.current.last_updated);
        document.getElementById("todayName").innerHTML = today.toLocaleString('en-us', { weekday: 'long' });
        document.getElementById("todaydate").innerHTML = today.getDate() + " " + today.toLocaleString('en-us', { month: 'long' });
        document.getElementById("city").innerHTML = data.location.name;
        document.getElementById("todayTemp").innerHTML = data.current.temp_c;
        document.getElementById("icon-cond").setAttribute('src', `https:${data.current.condition.icon}`);
        document.getElementById("consdition").innerHTML = data.current.condition.text;
        document.getElementById("humid").innerHTML = data.current.humidity + '%';
        document.getElementById("speed").innerHTML = data.current.wind_kph + "km/h";
        document.getElementById("com-loc").innerHTML = data.current.wind_dir;
    
        //tomorrow
        let tomorrow = new Date(data.forecast.forecastday[1].date);
        document.getElementById("tomorrowDay").innerHTML = tomorrow.toLocaleString('en-us', { weekday: 'long' });
        document.getElementById("tomorrowWeather").innerHTML = data.forecast.forecastday[1].day.avgtemp_c;
        document.getElementById("consdition1").innerHTML = data.forecast.forecastday[1].day.condition.text;
        document.getElementById("icon-tomorrow").setAttribute('src', `https:${data.forecast.forecastday[1].day.condition.icon}`);
    
        //afterTomorrow
        let afterTomorrow = new Date(data.forecast.forecastday[2].date);
        document.getElementById("todayName2").innerHTML = afterTomorrow.toLocaleString('en-us', { weekday: 'long' });
        document.getElementById("todayTemp2").innerHTML = data.forecast.forecastday[2].day.avgtemp_c;
        document.getElementById("consdition2").innerHTML = data.forecast.forecastday[2].day.condition.text;
        document.getElementById("icon-tomorrow2").setAttribute('src', `https:${data.forecast.forecastday[2].day.condition.icon}`);
    }
   
   


let city = prompt("Вкажіть любе місто так:KYIV,LVIV,ODESA,KHARKIV,LUTSK...")  
let city2 =[
    city=city
]
console.log(city2[0])
fetch("http://api.openweathermap.org/data/2.5/weather?q="+city2[0]+"&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(function(res) {return res.json() })
.then((data) => {
    console.log(data);
    document.querySelector(".name p").textContent = data.name;
    document.querySelector(".humidity").textContent = ("Humidity:"+data.main.humidity+"%");
    document.querySelector(".pressure").textContent = ("Pressure:"+data.main.pressure+"hPa")
    document.querySelector(".wind").innerHTML = ("Wind:"+data.wind.speed+"km/h "+data.wind.deg+"&deg;")
    document.querySelector(".img").innerHTML ='<img src="http://openweathermap.org/img/w/'+data.weather[0]['icon']+'.png">'
    document.querySelector(".temp").innerHTML =Math.round(+data.main.temp) + "&deg;"
    document.querySelector(".description").textContent =data.weather[0]['description']
     
  });

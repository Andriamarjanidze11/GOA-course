const API = "https://api.openweathermap.org/data/2.5/weather?q=lomi&appid=5faa8e189a4b974b5f1dd2556054e48f&units=metric";

const myWeatherAsyncFunc = async () => {
    const res = await fetch(API);
    const data = await res.json();

    const el = document.createElement("p");
    el.textContent = `${data.name}: ${data.main.temp}°C`;
    document.body.appendChild(el);
};

myWeatherAsyncFunc();

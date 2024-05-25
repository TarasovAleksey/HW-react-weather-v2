import React, { useState } from "react";
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import { API_KEY, BASE_URL } from "../utils/constants.js";

function Data() {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [message, setMessage] = useState("Enter city name");

    const getWeather = (city) => {
        fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure
                });
                setMessage(null);
            })
            .catch(e => console.log(e)); // TODO: handle error view
    };

    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather message={message} weatherInfo={weatherInfo} />
        </div>
    );
}

export default Data;

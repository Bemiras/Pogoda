import React from "react";
import './Result.css'

const Result = props => {

    const {date, city, sunrise, sunset, temp, tempMax, tempFeel, pressure, visibility, humidity, wind, err} = props.weather;
    let content = null;

    if(!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content =(
            <React.Fragment>
                <h3><em>{city}</em></h3>
                <h4>Aktualny czas: {date}</h4>
                <h4>Temperatura: {temp} &#176;C</h4>
                <h4>Max temperatura: {tempMax} &#176;C</h4>
                <h4>Odczuwalna temperatura: {tempFeel} &#176;C</h4>
                <h4>Widoczność: {visibility}m</h4>
                <h4>Wilgotność powietrza: {humidity} %</h4>
                <h4>Wschód słońca: {sunriseTime} </h4>
                <h4>Zachód słońca: {sunsetTime} </h4>
                <h4>Ciśnienie atmosferyczne: {pressure} hPa</h4>
                <h4>Siła wiatru: {wind} m/s</h4>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="result">
                {err ? `Nie mamy w bazie ${city}` : content}
            </div>
        </React.Fragment>
    );
}
export default Result;
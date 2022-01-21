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
                <h4>Aktualna temperatura: {temp} &#176;C</h4>
                <h4>Max: {tempMax} &#176;C</h4>
                <h4>Odczuwalna: {tempFeel} &#176;C</h4>
                <h4>Widoczność: {visibility}m</h4>
                <h4>Wilgotność: {humidity} %</h4>
                <h4>Wschód: {sunriseTime} </h4>
                <h4>Zachód: {sunsetTime} </h4>
                <h4>Ciśnienie: {pressure} hPa</h4>
                <h4>Aktualna siła wiatru: {wind} m/s</h4>
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
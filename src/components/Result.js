import React from "react";
import './Result.css'

const Result = props => {

    const {city, sunrise, sunset, temp, tempFeel, pressure, visibility, humidity, wind, err} = props.weather;
    let content = null;

    if(!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

        content =(
            <React.Fragment>
                <div className="data">
                    <div>
                        <h3><em>{city}</em></h3>
                        <table cellSpacing='20'  id="tableresult">
                            <tbody>
                            <tr>
                                <th className="title"><i className="material-icons">thermostat</i> Temperatura</th>
                                <th className="title"><i className="material-icons">thermostat</i> Odczuwalna</th>
                            </tr>
                            <tr>
                                <td>{temp}&#176;C</td>
                                <td>{tempFeel}&#176;C</td>
                            </tr>
                            <tr>
                                <td className="title"><i className="material-icons">visibility</i> Widoczność</td>
                                <td className="title"><i className="material-icons">air</i>Siła wiatru</td>
                            </tr>
                            <tr>
                                <td>{visibility}m</td>
                                <td>{wind} m/s</td>
                            </tr>
                            <tr>
                                <td className="title"><i className="material-icons">wb_sunny</i> Wschód</td>
                                <td className="title"><i className="material-icons">wb_sunny</i> Zachód</td>
                            </tr>
                            <tr>
                                <td>{sunriseTime}</td>
                                <td>{sunsetTime} </td>
                            </tr>
                            <tr>
                                <td className="title">Ciśnienie</td>
                                <td className="title">Wilgotność</td>
                            </tr>
                            <tr>
                                <td>{pressure} hPa</td>
                                <td>{humidity} %</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
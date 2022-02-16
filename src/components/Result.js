import React from "react";
import './Result.css'
import {Grid, Paper} from '@material-ui/core';
import {
    WiBarometer,
    WiFog,
    WiHumidity,
    WiStrongWind,
    WiSunrise,
    WiSunset,
    WiThermometer,
    WiThermometerExterior
} from "react-icons/wi";

const Result = props => {

    const paperStyle={padding: 20, height:'70vh', width:320, margin:"20px auto", background:"rgba(255, 255, 255, 0.7)"};
    const {city, sunrise, sunset, temp, tempFeel, pressure, visibility, humidity, wind, err} = props.weather;
    let content = null;

    if(!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content =(
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <h3><em>{city}</em></h3>
                        <table cellSpacing='20'  id="tableresult">
                            <tbody>
                            <tr>
                                <th className="title"><WiThermometer />Temperatura</th>
                                <th className="title"><WiThermometerExterior />Odczuwalna</th>
                            </tr>
                            <tr>
                                <td className="data">{temp}&#176;C</td>
                                <td className="data">{tempFeel}&#176;C</td>
                            </tr>
                            <tr>
                                <th className="title"><WiFog/>Widoczność</th>
                                <th className="title"><WiStrongWind />Siła wiatru</th>
                            </tr>
                            <tr>
                                <td className="data">{visibility}m</td>
                                <td className="data">{wind} m/s</td>
                            </tr>
                            <tr>
                                <th className="title"><WiSunrise/>Wschód</th>
                                <th className="title"><WiSunset/>Zachód</th>
                            </tr>
                            <tr>
                                <td className="data">{sunriseTime}</td>
                                <td className="data">{sunsetTime} </td>
                            </tr>
                            <tr>
                                <th className="title"><WiBarometer/>Ciśnienie</th>
                                <th className="title"><WiHumidity/>Wilgotność</th>
                            </tr>
                            <tr>
                                <td className="data">{pressure} hPa</td>
                                <td className="data">{humidity} %</td>
                            </tr>
                            </tbody>
                        </table>

                    </Grid>
                </Paper>
            </Grid>
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
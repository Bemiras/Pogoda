import './App.css';
import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";

const APIKey = '21e09e299b5b7729777b677005170809'

class App extends Component {
    state = {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        tempMax:'',
        tempFeel:'',
        pressure: '',
        wind: '',
        err: false
    }

    handleInputChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleCitySubmit = e => {
        e.preventDefault()
        const API =
            `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
        fetch(API)
          .then(response => {
              if(response.ok){
                 return response
              }
              throw Error("Nie udało się")
          })
          .then(response => response.json())
          .then(data => {
              const time = new Date().toLocaleTimeString()

              this.setState(state => ({
                  err: false,
                  date: time,
                  city: this.state.value,
                  sunrise: data.sys.sunrise,
                  sunset: data.sys.sunset,
                  temp: data.main.temp,
                  tempMax: data.main.temp_max,
                  tempMin: data.main.teep_min,
                  tempFeel: data.main.feels_like,
                  humidity: data.main.humidity,
                  pressure: data.main.pressure,
                  visibility: data.visibility,
                  clouds: data.clouds.all,
                  wind: data.wind.speed,
              }))
          })
          .catch(err => {
              console.log(err);
              this.setState(prevState => ({
                  err: true,
                  city: prevState.value
              }))
          })
    }

    render () {
      return (
            <div className="App">
                <Form
                    value = {this.state.value}
                    change = {this.handleInputChange}
                    submit = {this.handleCitySubmit}
                />
                <Result
                    weather = {this.state}
                />
            </div>
      );
    }

}

export default App;

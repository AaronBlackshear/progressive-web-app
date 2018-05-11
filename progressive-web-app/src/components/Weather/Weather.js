import React, { Component } from "react";
import "./weather.css";

export default class Weather extends Component {
  render() {
    let min_fahrenheit;
    let max_fahrenheit;
    let avg_fahrenheit;

    this.props.weatherData.data &&
      (min_fahrenheit =
        9 / 5 * (this.props.weatherData.data.list[0].main.temp_min - 273) + 32);
    this.props.weatherData.data &&
      (max_fahrenheit =
        9 / 5 * (this.props.weatherData.data.list[0].main.temp_max - 273) + 32);
    this.props.weatherData.data &&
      (avg_fahrenheit = (max_fahrenheit + min_fahrenheit) / 2);
    return (
      <div>
        <h1 className="average-temp">
          {this.props.weatherData.data
            ? `${Math.floor(avg_fahrenheit)}`
            : "0"}
        </h1>
        <div className="temp-container">
          <h1>
            <span className="min-temp">
              {this.props.weatherData.data
                ? `${Math.floor(min_fahrenheit)}` + "/"
                : "0/"}
            </span>
            <span className="min-temp">
              {this.props.weatherData.data
                ? `${Math.floor(max_fahrenheit)}`
                : "0"}
            </span>
          </h1>
        </div>
        {this.props.weatherData.data && (
          <h3 className='weather-data'>{this.props.weatherData.data.city.name}</h3>
        )}
        {this.props.weatherData.data && (
          <h3 className='weather-data clouds'>
            {this.props.weatherData.data.list[0].weather[0].description}
          </h3>
        )}
      </div>
    );
  }
}

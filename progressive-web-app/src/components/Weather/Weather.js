import React, { Component } from "react";

export default class Weather extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fahrenheit: ""
//     };
//   }

  render() {
    // this.props.weatherData.data &&
    // console.log(
    //   this.props.weatherData.data.city.name,
    //   this.props.weatherData.data.list[0].main.temp

    let fahrenheit;
    this.props.weatherData.data && (
        (fahrenheit = (9 / 5) * (this.props.weatherData.data.list[0].main.temp - 273) + 32) 
    );
    return (
      <div>
        {this.props.weatherData.data && (
          <div>{this.props.weatherData.data.city.name}</div>
        )}
        {Math.floor(fahrenheit) || null}
      </div>
    );
  }
}

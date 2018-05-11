import React, { Component } from "react";

export default class Weather extends Component {
//   componentDidMount() {
//     this.props.weatherData.data &&
//       console.log(
//         this.props.weatherData.data.city.name,
//         this.props.weatherData.data.list[0].main.temp
//       );
//   }

  render() {
    this.props.weatherData.data &&
    console.log(
      this.props.weatherData.data.city.name,
      this.props.weatherData.data.list[0].main.temp
    );
    return (
        <div>
            {this.props.weatherData.data && (
                <div>{this.props.weatherData.data.city.name}</div>
            )}
        </div>
    );
  }
}

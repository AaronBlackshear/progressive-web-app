import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      state: "",
      weatherData: {}
    };
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleStateInput = this.handleStateInput.bind(this);
    this.handleWeatherSearch = this.handleWeatherSearch.bind(this);
  }

  componentDidMount() {
    // axios
    //   .get(
    //     `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${
    //       this.state.state
    //     },1&appid=416871977cf299500e97014a69960fb9`
    //   )
    //   .then(res => console.log(res));
  }

  handleWeatherSearch() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${
          this.state.state
        },1&appid=416871977cf299500e97014a69960fb9`
      )
      .then(res => this.setState({ weatherData: res }));
  }

  handleCityInput(val) {
    this.setState({ city: val });
  }

  handleStateInput(val) {
    this.setState({ state: val });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          handleCityInput={this.handleCityInput}
          handleStateInput={this.handleStateInput}
          handleWeatherSearch={this.handleWeatherSearch}
        />
        <Weather weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default App;

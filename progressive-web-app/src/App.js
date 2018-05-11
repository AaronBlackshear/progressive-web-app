import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      stateInput: "",
      weatherData: {}
    };
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleStateInput = this.handleStateInput.bind(this);
    this.handleWeatherSearch = this.handleWeatherSearch.bind(this);
  }

  handleWeatherSearch() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${
          this.state.stateInput
        },1&appid=416871977cf299500e97014a69960fb9`
      )
      .then(res => this.setState({ weatherData: res }));
  }

  handleCityInput(val) {
    this.setState({ city: val });
  }

  handleStateInput(val) {
    this.setState({ stateInput: val });
  }

  render() {
    return (
      <div className="App-container">
        <Header />
        <Search
          handleCityInput={this.handleCityInput}
          handleStateInput={this.handleStateInput}
          handleWeatherSearch={this.handleWeatherSearch}
        />
        <Weather weatherData={this.state.weatherData} />
        <Footer />
        <div className="App" />
      </div>
    );
  }
}

export default App;

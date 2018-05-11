import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input placeholder='Enter City' onChange={e => this.props.handleCityInput(e.target.value)} />
        <input placeholder='Enter State' onChange={e => this.props.handleStateInput(e.target.value)} />
        <button onClick={ () => this.props.handleWeatherSearch() }>Search</button>
      </div>
    );
  }
}

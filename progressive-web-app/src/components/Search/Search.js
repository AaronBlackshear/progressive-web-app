import React from "react";
import './search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input className='search-city search' placeholder='DALLAS' onChange={e => this.props.handleCityInput(e.target.value)} />
        <input className='search-state search' placeholder='TX' onChange={e => this.props.handleStateInput(e.target.value)} />
        <button className='search-button' onClick={ () => this.props.handleWeatherSearch() }>Search</button>
      </div>
    );
  }
}

import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/WeatherList';

export default class App extends Component {
  render() {
    return (
      <SearchBar />
      <WeatherList />
    );
  }
}

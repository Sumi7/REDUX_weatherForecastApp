import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/charts';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component{

    renderWeather(cityData){
        const cityName = cityData.city.name;
        const cityTemp = cityData.list.map(weather => weather.main.temp);
        const cityPressure = cityData.list.map(weather => weather.main.pressure);
        const cityHumidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        return (
            <tr key = {cityName}>
                <td>
                    <GoogleMap lon = {lon} lat = {lat}/>
                </td>
                <td>
                    <Chart color = "red" data = {cityTemp} unit = "K"/>
                </td>
                <td>
                    <Chart color = "green" data = {cityPressure} unit = "hpa"/>
                </td>
                <td>
                    <Chart color = "blue" data = {cityHumidity} unit = "%"/>
                </td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStatetoProps({weather}){
    return {weather};
}

export default connect(mapStatetoProps)(WeatherList);

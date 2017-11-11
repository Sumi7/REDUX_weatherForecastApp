import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{

    renderWeather(cityData){
        const cityName = cityData.city.name;
        const cityTemp = cityData.list.map(weather => weather.main.temp);
        const cityPressure = cityData.list.map(weather => weather.main.pressure);
        const cityHumidity = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key = {cityName}>
                <td>{cityName}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )
    }

    render(){
        return{
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
        }
    }
}

mapStatetoProps({weather}){
    return {weather}
}

export default connect(mapStatetoProps)(WeatherList);

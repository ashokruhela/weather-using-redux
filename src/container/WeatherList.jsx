import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Chart, GoogleMap} from '../component';

class WeatherList extends Component {

    renderWeather(cityData, index){
        const temps = cityData.list.map(weather => weather.main.temp)
        const hums = cityData.list.map(weather => weather.main.humidity)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        return(
            <tr key={index}>
                <td ><GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/></td>
                <td><Chart data={temps} color='orange' units="C"/></td>
                <td><Chart data={pressures} color='red' units="hPa"/></td>
                <td><Chart data={hums} color='blue' units="%"/></td>
            </tr>
        );
    }
    render() {
        return (
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
                    {this.props.weather.map(this.renderWeather.bind(this))}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return { weather }
}

export default connect(mapStateToProps, null)(WeatherList);
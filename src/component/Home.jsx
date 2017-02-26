import React, {Component} from 'react';
// import '../../styles/style.css';
import {SearchBar, WeatherList} from '../container';

const Home = ()=> {
    return (
        <div>
            <SearchBar/>
            <WeatherList/>
        </div>
    )
}

export default Home;
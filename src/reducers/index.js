import { combineReducers } from 'redux';
import weather_reducer from './reducer_weather.js';

const rootReducer = combineReducers({
  weather: weather_reducer
});

export default rootReducer;

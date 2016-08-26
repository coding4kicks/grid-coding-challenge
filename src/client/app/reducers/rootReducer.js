import {combineReducers} from 'redux';
import photos from './photos.js';

const rootReducer = combineReducers({
  photos: photos
});

export {rootReducer};

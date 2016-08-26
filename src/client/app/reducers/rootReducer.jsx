import {combineReducers} from 'redux';
import photos from './photos.jsx';

const rootReducer = combineReducers({
  photos: photos
});

export {rootReducer};

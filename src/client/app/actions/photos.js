import {FAVORITE_PHOTO,
        FETCH_PHOTOS,
        FETCH_PHOTOS_ERROR,
        FETCH_PHOTOS_SUCCESS} from '../constants/photo-action-types.js';
import {fetchPhotosFrom500px} from '../services/photoService.js';


export function favoritePhoto(id) {
  return {
    type: FAVORITE_PHOTO,
    id: id
  };
}

export function fetchPhotos() {
  return {
    type: FETCH_PHOTOS
  };
}

export function fetchPhotosError(error) {
  return {
    type: FETCH_PHOTOS_ERROR,
    error: error
  };
}

export function fetchPhotosSuccess(data) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    data: data
  };
}

export function fetchPhotosFromAPI(page) {
  return dispatch => {
    dispatch(fetchPhotos(page));
    return fetchPhotosFrom500px(page).then(
      response => dispatch(fetchPhotosSuccess(response)),
      error => dispatch(fetchPhotosError(error))
    );
  };
}
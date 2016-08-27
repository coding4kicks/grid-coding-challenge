import {SCROLL_PHOTOS,
        FAVORITE_PHOTO,
        FETCH_PHOTOS,
        FETCH_PHOTOS_ERROR,
        FETCH_PHOTOS_SUCCESS} from '../constants/photo-action-types.js';
import {fetchPhotosFrom500px} from '../services/photoService.js';

export function scrollPhotos(position, height) {
  return {
    type: SCROLL_PHOTOS,
    position: position,
    height: height
  };
}

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

export function fetchPhotosSuccess(data, start, stop) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    data: data,
    start: start,
    stop: stop
  };
}

export function fetchPhotosFromAPI() {
  let start = 1;
  let stop = 2;
  // TODO: paging

  return dispatch => {
    dispatch(fetchPhotos());
    return fetchPhotosFrom500px().then(
      response => dispatch(fetchPhotosSuccess(response, start, stop)),
      error => dispatch(fetchPhotosError(error))
    );
  };
}
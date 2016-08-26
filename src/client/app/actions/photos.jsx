import {SCROLL_PHOTOS,
        FAVORITE_PHOTO,
        FETCH_PHOTOS,
        FETCH_PHOTOS_ERROR,
        FETCH_PHOTOS_SUCCESS} from '../constants/app-action-types';

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
  // TODO: handle fetch and paging
  return dispatch => {
    dispatch(fetchPhotos());
    //return photoService.getPhotos()
    //  .then(response => dispatch(fetchPhotosSuccess(response, start, stop)));
  };
}
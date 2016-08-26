import {SCROLL_PHOTOS,
  FAVORITE_PHOTO,
  FETCH_PHOTOS,
  FETCH_PHOTOS_ERROR,
  FETCH_PHOTOS_SUCCESS} from '../constants/photo-action-types.jsx';

const photos = (state = {test: 'test'}, action = null) => {
  switch (action.type) {

    case SCROLL_PHOTOS:
      return Object.assign({}, state, {});

    case FAVORITE_PHOTO:
      return Object.assign({}, state, {});

    case FETCH_PHOTOS:
      return Object.assign({}, state, {isFetchingPhotos: true});

    case FETCH_PHOTOS_ERROR:
      return Object.assign({}, state, {
        isFetchingPhotos: false,
        photoFetchError: action.error
      });

    case FETCH_PHOTOS_SUCCESS:
      return Object.assign({}, state, {
        isFetchingPhotos: false,
        photos: action.data
      });

    default:
      return state;
    }
};

export default photos
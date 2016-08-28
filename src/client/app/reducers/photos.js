import {SCROLL_PHOTOS,
  FAVORITE_PHOTO,
  FETCH_PHOTOS,
  FETCH_PHOTOS_ERROR,
  FETCH_PHOTOS_SUCCESS} from '../constants/photo-action-types.js';


const photos = (state = {favorites: {}, favoriteCount: 0}, action = null) => {

  switch (action.type) {

    case SCROLL_PHOTOS:
      return Object.assign({}, state, {});

    case FAVORITE_PHOTO:
      const favorites = Object.assign({}, state.favorites, {
        [action.id]: !state.favorites[action.id]
      });
      const favoriteCount = favorites[action.id] ? state.favoriteCount + 1 : state.favoriteCount - 1;
      return Object.assign({}, state, {favorites: favorites, favoriteCount: favoriteCount});

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
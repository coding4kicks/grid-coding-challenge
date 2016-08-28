import {SCROLL_PHOTOS,
  FAVORITE_PHOTO,
  FETCH_PHOTOS,
  FETCH_PHOTOS_ERROR,
  FETCH_PHOTOS_SUCCESS} from '../constants/photo-action-types.js';


const photos = (state = {favorites: {}, favoriteCount: 0, latestPage: 0, allPhotos: []}, action = null) => {

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


  /**
   * TODO: Should remove early pages so React only renders pages in view.
   *       Use div to maintain same screen/scroll height.
   *       Add pages back to render if scroll up.
   *       see: http://stackoverflow.com/questions/20870448/reactjs-modeling-bi-directional-infinite-scrolling
   */
    case FETCH_PHOTOS_SUCCESS:
      const photos = Object.assign({}, state.photos, {
        [action.data.current_page]: action.data
      });
      return Object.assign({}, state, {
        isFetchingPhotos: false,
        allPhotos: state.allPhotos.concat(action.data.photos),
        photoData: photos,
        latestPage: action.data.current_page
      });

    default:
      return state;
    }
};

export default photos
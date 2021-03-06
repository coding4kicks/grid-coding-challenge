import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {favoritePhoto, scrollPhotos, fetchPhotosFromAPI} from '../actions/photos.js';
import TitleBar from '../components/titlebar.jsx';
import Grid from '../components/grid.jsx';

/**
 * Dashboard Container
 *
 * Passes state into it's only two parts: a Toolbar and Grid component.
 * Watches scroll events and determines if more pictures need to be loaded for infinite scroll
 */
class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.favorite = this.favorite.bind(this);
    this.scroll = this.scroll.bind(this);
    window.onscroll =  _.debounce(this.scroll, 20);
  }

  favorite(id) {
    this.props.dispatch(favoritePhoto(id));
  }

  scroll(e) {
    const scrollDistance = document.body.scrollTop
    const dashboardHeight = document.getElementById('dashboard').offsetHeight; // TODO: move query out of function
    const isFetching = this.props.photos.isFetchingPhotos;
    if (dashboardHeight - 1500 < scrollDistance && !isFetching) {
      this.props.dispatch(fetchPhotosFromAPI(this.props.photos.latestPage + 1));
    }
  }

  render() {
    return (
      <div id="dashboard">
        <TitleBar favorites={this.props.photos.favoriteCount} />
        <div style={{paddingTop: '64px'}}>
          <Grid items={this.props.photos.allPhotos} clickedItems={this.props.photos.favorites} tileClickHandler={this.favorite}></Grid>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    photos: state.photos
  }
}

const VisibleDashboard = connect(
  mapStateToProps
)(Dashboard)

export default VisibleDashboard;
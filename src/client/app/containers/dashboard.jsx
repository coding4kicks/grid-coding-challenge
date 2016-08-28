import React from 'react';
import {connect} from 'react-redux';
import {favoritePhoto} from '../actions/photos.js';
import TitleBar from '../components/titlebar.jsx';
import Grid from '../components/grid.jsx';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {likesCount : 0};
    this.favorite = this.favorite.bind(this);
  }

  favorite(id) {
    this.props.dispatch(favoritePhoto(id))
  }

  render() {
    const photos = this.props.photos.photos ? this.props.photos.photos : {photos: []};
    const favoriteCount = this.props.photos.favoriteCount ? this.props.photos.favoriteCount : 0;
    return (
      <div>
        <TitleBar favorites={favoriteCount} />
        <div style={{paddingTop: '64px'}}>
          <Grid items={photos.photos} clickedItems={this.props.photos.favorites} tileClickHandler={this.favorite}></Grid>
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
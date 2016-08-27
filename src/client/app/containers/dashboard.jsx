import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TitleBar from '../components/titlebar.jsx';
import Grid from '../components/grid.jsx';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  favorite(id) {
    console.log('favorite');
    console.log(id);
  }

  render() {
    let photos = (this.props.photos && this.props.photos.photos) ? this.props.photos.photos : {photos: []};
    return (
      <div>
        <TitleBar favorites={this.state.likesCount} />
        <div style={{paddingTop: '64px'}}>
          <Grid items={photos.photos} tileClickHandler={this.favorite}></Grid>
          Likes : <span>{this.state.likesCount}</span><br />
          <RaisedButton label="Like Me" onClick={this.onLike} />
          <div style={{height: '1000px'}}></div>
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
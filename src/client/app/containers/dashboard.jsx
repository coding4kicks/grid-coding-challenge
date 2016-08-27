import React from 'react';
import {connect} from 'react-redux';
import TitleBar from '../components/titlebar.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {fetchPhotosFrom500px} from '../services/photoService.js';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
    fetchPhotosFrom500px().then(function(data) {
      console.log('here');
      console.log(data);
    }, function(error) {
      console.log('error');
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <TitleBar favorites={this.state.likesCount} />
        Likes : <span>{this.state.likesCount}</span><br />
        <RaisedButton label="Like Me" onClick={this.onLike} />
        <div>{this.props.photos.test}</div>
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
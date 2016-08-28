import React from 'react';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';

/**
 * TitleBar Component
 *
 * Displays the number of favorited photos by the user
 * TODO: menu of categories.
 */
class TitleBar extends React.Component {

  constructor(props) {
    super(props);
  }

  renderBadge() {
    return (
      <Badge badgeContent={this.props.favorites} primary={true}>
        Favorites
      </Badge>
    );
  }

  render() {
    return (
      <AppBar
        title='Photo Grid'
        iconElementRight={this.renderBadge()}
        style={{position: 'fixed'}}
      />
    );
  }

}

export default TitleBar;
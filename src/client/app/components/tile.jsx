import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';


/**
 * Tile Component
 *
 * Uses material-ui Card to display a picture with a title.
 * Alters background color to grey if the item has been clicked
 * as determined from the passed in clickedItems dictionary
 * Cards show the times_viewed property of the item on hover.
 */
class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hover : false};
  }

  mouseEnter() {
    this.setState({hover: true});
  }

  mouseLeave() {
    this.setState({hover: false});
  }

  render() {
    const item = this.props.item;
    const cardStyle = {width: '256px', margin: '16px', borderRadius: '8px'};
    const clicked = this.props.clickedItems ? this.props.clickedItems[item.id] : false;
    let overlay = null;

    if (this.state.hover) {
      overlay = <CardTitle title={item.times_viewed + ' views'} />;
      cardStyle['cursor'] = 'pointer';
    }

    if (clicked) {
      cardStyle['backgroundColor'] = '#efeff5';
    }

    return (
      <Card style={cardStyle}
            onMouseEnter={(e) => this.mouseEnter(e)}
            onMouseLeave={(e) => this.mouseLeave(e)}
            onClick={(e) => this.props.clickHandler(item.id, e)}>
        <CardMedia overlay={overlay}>
          <img src={item.image_url} style={{borderRadius: '8px', width: '256px'}} />
        </CardMedia>
        <CardTitle title={item.name} />
      </Card>
    );
  }

}

export default Tile;
import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

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
    let overlay = null;
    if (this.state.hover) {
      overlay = <CardTitle title={item.times_viewed + ' views'} />;
      cardStyle['cursor'] = 'pointer';
    }
    return (
      <Card style={cardStyle}
            onMouseEnter={(e) => this.mouseEnter(e)}
            onMouseLeave={(e) => this.mouseLeave(e)}>
        <CardMedia overlay={overlay}>
          <img src={item.image_url} style={{borderRadius: '8px', width: '256px'}} />
        </CardMedia>
        <CardTitle title={item.name} />
      </Card>
    );
  }

}

export default Tile;
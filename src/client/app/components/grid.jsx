import React from 'react';
import Tile from './tile.jsx';

class Grid extends React.Component {

  constructor(props) {
    super(props);
  }

  renderTiles(item) {
    return (
      <div key={item.id}>{item.name}</div>
    );
  }

  render() {
    return (
      <div>
        {this.props.items.map((item) => this.renderTiles(item))}
      </div>
    );
  }

}

export default Grid;
import React from 'react';
import Tile from './tile.jsx';

class Grid extends React.Component {

  constructor(props) {
    super(props);
  }

  renderTiles(item) {
    return (
      <Tile key={item.id} item={item} clickHandler={this.props.tileClickHandler}></Tile>
    );
  }

  renderColumns(items) {
    const columnNumber = 4;
    let columns = [];
    for (let i = 0; i <= columnNumber; i++) {
      columns.push(
        <div key={i} style={{display: 'flex', flexDirection: 'column'}}>
          {items.filter((item , j) => {
            return j % columnNumber == i}).map((item) => this.renderTiles(item))}
        </div>
      );
    }
    return columns;
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row', width: 1162, margin: '0 auto'}}>
          {this.renderColumns(this.props.items)}
        </div>
      </div>
    );
  }

}

export default Grid;
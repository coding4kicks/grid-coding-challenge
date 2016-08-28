import React from 'react';
import _ from 'lodash';
import Tile from './tile.jsx';

class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {width: document.body.clientWidth};
    window.onresize = _.debounce((e) => {this.setState({width: document.body.clientWidth})}, 40);
  }

  renderTile(item) {
    return (
      <Tile key={item.id}
            item={item}
            clickedItems={this.props.clickedItems}
            clickHandler={this.props.tileClickHandler}></Tile>
    );
  }

  renderColumns(items) {
    const columnNumber = Math.floor(this.state.width / 300);
    let columns = [];
    for (let i = 0; i < columnNumber; i++) {
      columns.push(
        <div key={i} style={{display: 'flex', flexDirection: 'column'}}>
          {items.filter((item , j) => {
            return j % columnNumber == i}).map((item) => this.renderTile(item))}
        </div>
      );
    }
    return columns;
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-flex', flexDirection: 'row', margin: '0 auto'}}>
          {this.renderColumns(this.props.items)}
        </div>
      </div>
    );
  }

}

export default Grid;
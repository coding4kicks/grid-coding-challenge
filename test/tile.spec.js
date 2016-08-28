import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Tile from '../src/client/app/components/tile.jsx';

describe('<Tile/>', function () {
  const item = {image_url: 'testSrc', times_viewed: 10};

  it('should render Card as main container', function () {
    const wrapper = shallow(<Tile  item={item}/>);
    expect(wrapper.find('Card')).to.have.length(1);
  });

  it('should render CardMedia to render the pictures ', function () {
    const wrapper = shallow(<Tile  item={item}/>);
    expect(wrapper.find('CardMedia')).to.have.length(1);
  });

  it('should have an image to display the picture', function () {
    const wrapper = shallow(<Tile item={item}/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should render CardTitle to display the title', function () {
    const wrapper = shallow(<Tile  item={item}/>);
    expect(wrapper.find('CardTitle')).to.have.length(1);
  });
});
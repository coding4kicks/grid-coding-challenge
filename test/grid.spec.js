import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Grid from '../src/client/app/components/grid.jsx';

describe('<Grid/>', function () {
  const items = [{image_url: 'testSrc', times_viewed: 10}];

  it('should render two divs as wrapper for columns', function () {
    const wrapper = shallow(<Grid  items={items}/>);
    expect(wrapper.find('div')).to.have.length(2);
  });

});
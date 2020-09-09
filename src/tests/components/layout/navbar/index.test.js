import React from 'react';
import { NavbarComponent } from '../../../../components/layout/navbar';
import { shallow } from 'enzyme';

describe('test Navbar', () => {
  it('should render navbar correctly', () => {
    const wrapper = shallow(<NavbarComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { PageContainer } from '../../../../components/layout/page-container';

describe('test PageContainer', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<PageContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});

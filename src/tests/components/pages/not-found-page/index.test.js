import React from 'react';
import NotFoundPage from '../../../../components/pages/not-found-page';
import { shallow } from 'enzyme';

describe('test notFoundPage', () => {
  it('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});

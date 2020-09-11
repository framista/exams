import React from 'react';
import ModalForm from '../../../../../components/layout/modal-form';
import { shallow } from 'enzyme';
import { set, reset } from 'mockdate';

describe('test modalForm', () => {
  const date = '2020-04-03T18:09:12.451Z';
  beforeEach(() => {
    set(date);
  });
  afterEach(() => {
    reset();
  });
  it('should render modal form correctly', () => {
    const wrapper = shallow(
      <ModalForm
        show={true}
        onHide={() => {}}
        title="Add exam"
        exam={{
          id: '12aas12',
          subject: 'matematyka',
          unit: 'trygonometria',
          tasks: 'Rozwiązywanie zw trygonometrii',
          teacher: 'Tomasz Matyski',
          date: new Date(),
          grade: '1',
        }}
        saveExam={() => {}}
        deleteExam={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import {
  addFilter,
  clearFilters,
  addExam,
  sortExams,
} from '../../../redux/exams/actions';
import ModalForm from '../../layout/modal-form';

const MenuHome = ({ filters, addFilter, clearFilters, addExam, sortExams }) => {
  const [modalFormShow, setModalFormShow] = useState(false);
  const handleFilter = (filter) => {
    if (filter === 'all') {
      return clearFilters();
    }
    if (filters.indexOf(filter) === -1) {
      return addFilter(filter);
    }
  };
  const handleSort = (sortType) => {
    sortExams(sortType);
  };
  const saveExam = (exam) => {
    addExam(exam);
    setModalFormShow(false);
  };
  return (
    <Fragment>
      <ButtonGroup className="mt-2 mb-4">
        <Button variant="success" onClick={() => setModalFormShow(true)}>
          Nowy sprawdzian
        </Button>
        <DropdownButton
          variant="outline-success"
          as={ButtonGroup}
          title="Filtruj"
          id="bg-nested-dropdown"
          onSelect={(e) => handleFilter(e)}
        >
          <Dropdown.Item eventKey="all">Wszystko</Dropdown.Item>
          <Dropdown.Item eventKey="future">Przyszłe</Dropdown.Item>
          <Dropdown.Item eventKey="noResult">Nieocenione</Dropdown.Item>
          <Dropdown.Item eventKey="failed">Niezaliczone</Dropdown.Item>
          <Dropdown.Item eventKey="passed">Zaliczone</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          variant="outline-success"
          as={ButtonGroup}
          title="Sortuj"
          id="bg-nested-dropdown"
          onSelect={(e) => handleSort(e)}
        >
          <Dropdown.Item eventKey="date">Data</Dropdown.Item>
          <Dropdown.Item eventKey="subject">Przedmiot</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      <ModalForm
        show={modalFormShow}
        onHide={() => setModalFormShow(false)}
        title="Dodaj sprawdzian"
        saveExam={saveExam}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ filters: state.exams.filters });
const mapDispatchToProps = (dispatch) => {
  return {
    addFilter: (filter) => dispatch(addFilter(filter)),
    clearFilters: () => dispatch(clearFilters()),
    addExam: (exam) => dispatch(addExam(exam)),
    sortExams: (sortType) => dispatch(sortExams(sortType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuHome);

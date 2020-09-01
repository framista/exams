import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { addFilter, clearFilters } from '../../../redux/exams/actions';

const MenuHome = ({ filters, addFilter, clearFilters }) => {
  const handleFilter = (filter) => {
    if (filter === 'all') {
      return clearFilters();
    }
    if (filters.indexOf(filter) === -1) {
      return addFilter(filter);
    }
  };
  return (
    <ButtonGroup className="mt-2 mb-4">
      <Button variant="success">Nowy sprawdzian</Button>
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
        onSelect={(e) => console.log(e)}
      >
        <Dropdown.Item eventKey="date">Data</Dropdown.Item>
        <Dropdown.Item eventKey="subject">Przedmiot</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
};

const mapStateToProps = (state) => ({ filters: state.exams.filters });
const mapDispatchToProps = (dispatch) => {
  return {
    addFilter: (filter) => dispatch(addFilter(filter)),
    clearFilters: () => dispatch(clearFilters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuHome);

import React from 'react';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';

const MenuHome = () => {
  return (
    <ButtonGroup className="mt-2 mb-4">
      <Button variant="success">Nowy sprawdzian</Button>
      <DropdownButton
        variant="outline-success"
        as={ButtonGroup}
        title="Filtruj"
        id="bg-nested-dropdown"
        onSelect={(e) => console.log(e)}
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

export default MenuHome;

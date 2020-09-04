import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { FormControl, ListGroup, Form } from 'react-bootstrap';
import { getUniqueExamWithProperty } from '../../../utils/examLogic';

const AutocompleteInput = ({ value, handleChange, data, exams, label }) => {
  const [display, setDisplay] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const options = getUniqueExamWithProperty(exams, data);
  const wrapperRef = useRef(null);

  useEffect(() => {
    handleChange(inputValue);
    // eslint-disable-next-line
  }, [inputValue]);

  const updateInputValue = (value) => {
    setInputValue(value);
    setDisplay(false);
  };

  const handleKeyPress = (e, value) => {
    if (e.key === 'Enter') {
      updateInputValue(value);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <Form.Group ref={wrapperRef}>
      <Form.Label>{label}</Form.Label>
      <FormControl
        type="text"
        onClick={() => setDisplay(!display)}
        onChange={(e) => setInputValue(e.target.value)}
        value={value}
        minLength="5"
        maxLength="50"
        required
      />
      {display && (
        <ListGroup>
          {options
            .filter(
              (option) =>
                option.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
            )
            .map((value, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  tabIndex={0}
                  onClick={() => updateInputValue(value)}
                  onKeyPress={(e) => handleKeyPress(e, value)}
                >
                  {value}
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      )}
      <Form.Control.Feedback type="invalid">
        Pole nie może być puste
      </Form.Control.Feedback>
    </Form.Group>
  );
};

const mapStateToProps = (state) => ({
  exams: state.exams.allExams,
});
export default connect(mapStateToProps)(AutocompleteInput);

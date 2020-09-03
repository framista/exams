import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AutocompleteInput from '../../layout/autocomplete-input';

const ModalForm = ({ show, onHide, title, exam, saveExam, deleteExam }) => {
  const [examData, setExamData] = useState(exam);
  const [validated, setValidated] = useState(false);
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    setExamData({ ...exam });
  }, [show, exam]);

  const handleGrade = (e) => {
    setExamData({ ...examData, grade: e.target.value });
  };

  const validateDateAndGrade = () => {
    return !(
      Number.isInteger(parseInt(examData.grade)) &&
      new Date(examData.date).getTime() > new Date().getTime()
    );
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const isFormValid = validateDateAndGrade();
      setDateError(!isFormValid);
      if (isFormValid) {
        saveExam(examData);
        setExamData(exam);
        setValidated(true);
      }
    }
    setValidated(true);
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      size="lg"
      centered
      aria-labelledby="contained-modal-title-vcenter"
    >
      {dateError && (
        <Alert variant="danger" className="my-3 mx-3">
          Nie możesz mieć oceny przed napisaniem <strong>sprawdzianu!</strong>
        </Alert>
      )}
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <AutocompleteInput
            value={examData.subject}
            handleChange={(value) =>
              setExamData({ ...examData, subject: value })
            }
            data={'subject'}
            label="Przedmiot"
          />
          <AutocompleteInput
            value={examData.teacher}
            handleChange={(value) =>
              setExamData({ ...examData, teacher: value })
            }
            data={'teacher'}
            label="Nauczyciel"
          />
          <Form.Group>
            <Form.Label>Dział</Form.Label>
            <Form.Control
              type="text"
              required
              minLength="5"
              maxLength="50"
              value={examData.unit}
              onChange={(e) =>
                setExamData({ ...examData, unit: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Pole powinno mieć 5 - 50 znaków
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Zagadnienia</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              required
              minLength="15"
              maxLength="100"
              value={examData.tasks}
              onChange={(e) =>
                setExamData({ ...examData, tasks: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Pole powinno mieć 15 - 100 znaków
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ocena</Form.Label>
            <Form.Control
              as="select"
              onChange={handleGrade}
              value={examData.grade}
            >
              <option value="">Brak</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="mr-3">Data</Form.Label>
            <DatePicker
              selected={examData.date}
              onChange={(date) => setExamData({ ...examData, date })}
              dateFormat="dd.MM.yyyy"
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-end">
            {deleteExam && (
              <Button
                variant="danger"
                className="mr-4"
                onClick={() => deleteExam(exam.id)}
              >
                Usuń
              </Button>
            )}
            <Button variant="secondary" className="mr-4" onClick={onHide}>
              Anuluj
            </Button>
            <Button variant="primary" type="submit">
              Zapisz
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

ModalForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  exam: PropTypes.object.isRequired,
  saveExam: PropTypes.func.isRequired,
};

ModalForm.defaultProps = {
  exam: {
    id: uuidv4(),
    teacher: '',
    subject: '',
    unit: '',
    tasks: '',
    grade: '',
    date: new Date(),
  },
};

export default ModalForm;

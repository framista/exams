import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { formatDate } from '../../../utils/date';
import { getBackgroundCard } from '../../../utils/examLogic';
import ModalForm from '../modal-form';
import { updateExam, deleteExam } from '../../../redux/exams/actions';

const ExamCard = ({ exam, updateExam, deleteExam }) => {
  const [modalFormShow, setModalFormShow] = useState(false);

  const { subject, unit, tasks, teacher, date, grade } = exam;

  const saveExam = (exam) => {
    updateExam(exam);
    setModalFormShow(false);
  };
  const handleDelete = (id) => {
    deleteExam(id);
    setModalFormShow(false);
  };
  return (
    <Col sm={6} lg={4} xl={3}>
      <Card
        className="mb-4 text-light shadow"
        onClick={() => setModalFormShow(true)}
        style={{ cursor: 'pointer' }}
        bg={getBackgroundCard(grade, date)}
      >
        <Card.Header>
          <Card.Title className="text-capitalize">{subject}</Card.Title>
          <Card.Subtitle className="text-capitalize">{teacher}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-capitalize">{unit}</Card.Text>
          <small>{tasks}</small>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <small>{formatDate(date)}</small>
          {grade && (
            <div>
              {new Array(6)
                .fill(0)
                .map((_, i) => i + 1)
                .map((starNumber) =>
                  starNumber <= grade ? (
                    <AiFillStar key={starNumber} />
                  ) : (
                    <AiOutlineStar key={starNumber} />
                  )
                )}
              <small className="ml-1">({grade})</small>
            </div>
          )}
        </Card.Footer>
      </Card>
      <ModalForm
        show={modalFormShow}
        onHide={() => setModalFormShow(false)}
        title="Edytuj sprawdzian"
        saveExam={saveExam}
        exam={{ ...exam }}
        deleteExam={handleDelete}
      />
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateExam: (exam) => dispatch(updateExam(exam)),
    deleteExam: (id) => dispatch(deleteExam(id)),
  };
};

export default connect(null, mapDispatchToProps)(ExamCard);

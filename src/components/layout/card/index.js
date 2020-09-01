import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { formatDate } from '../../../utils/date';
import { getBackgroundCard } from '../../../utils/examLogic';

const ExamCard = ({ exam }) => {
  const { id, subject, unit, tasks, teacher, date, grade } = exam;

  return (
    <Col sm={6} lg={4} xl={3}>
      <Card
        className="mb-4 text-light shadow-lg"
        onClick={() => console.log(id)}
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
    </Col>
  );
};

export default ExamCard;

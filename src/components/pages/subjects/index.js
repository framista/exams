import React from 'react';
import { connect } from 'react-redux';
import PageContainer from '../../layout/page-container';
import { Container } from 'react-bootstrap';
import { getSubjectsStatisitcs } from '../../../utils/examLogic';
import { Card, ProgressBar } from 'react-bootstrap';

const Subjects = ({ exams }) => {
  const subjectsStat = getSubjectsStatisitcs(exams).sort((a, b) =>
    a.subject.toLowerCase().localeCompare(b.subject.toLowerCase())
  );
  return (
    <PageContainer>
      <Container className="d-flex flex-column align-items-center text-center">
        <h3 className="mt-3 mb-5 text-primary">
          Średnie ocen z poszczególnych przedmiotów
        </h3>
        <div style={{ width: '80vw', maxWidth: '600px' }}>
          {subjectsStat.length > 0 ? (
            subjectsStat.map(({ subject, sum, amount }) => {
              const label = amount > 0 ? (sum / amount).toFixed(2) : '0';
              const average = sum > 0 ? ((sum / amount) * 100) / 6 : 0;
              return (
                <Card key={subject} className="mb-4" border="primary">
                  <Card.Body>
                    <Card.Title className="text-capitalize">
                      {subject}
                    </Card.Title>
                    <ProgressBar
                      now={average}
                      label={label}
                      variant="primary"
                      animated
                    />
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <h5 className="display-5 text-center text-primary">
              Brak przedmiotów
            </h5>
          )}
        </div>
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = (state) => ({
  exams: state.exams.allExams,
});

export default connect(mapStateToProps)(Subjects);

import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PageContainer from '../../layout/page-container';
import ExamCard from '../../layout/card';

const Home = ({ exams }) => {
  return (
    <PageContainer>
      <Container>
        <Row>
          {exams.map((exam) => (
            <ExamCard exam={exam} key={exam.id} />
          ))}
        </Row>
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = (state) => ({
  exams: state.exams.allExams,
});

export default connect(mapStateToProps)(Home);

import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PageContainer from '../../layout/page-container';
import ExamCard from '../../layout/card';
import MenuHome from '../../layout/menu-home';
import Filters from '../../layout/filters';
import { getStatusExam } from '../../../utils/examLogic';

const Home = ({ exams }) => {
  return (
    <PageContainer>
      <Container>
        <MenuHome />
        <Filters />
        <Row>
          {exams.map((exam) => (
            <ExamCard exam={exam} key={exam.id} />
          ))}
        </Row>
      </Container>
    </PageContainer>
  );
};

const getFilteredExams = (exams, filters) => {
  if (filters.length === 0) {
    return exams;
  }
  return exams.filter((exam) => {
    const { grade, date } = exam;
    const status = getStatusExam(grade, date);
    if (filters.includes(status)) return exam;
  });
};

const mapStateToProps = (state) => ({
  exams: getFilteredExams(state.exams.allExams, state.exams.filters),
});

export default connect(mapStateToProps)(Home);

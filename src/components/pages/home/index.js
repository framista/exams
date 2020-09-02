import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PageContainer from '../../layout/page-container';
import ExamCard from '../../layout/card';
import MenuHome from '../../layout/menu-home';
import Filters from '../../layout/filters';
import { getFilteredExams, getSortedExams } from '../../../utils/examLogic';

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

const mapStateToProps = (state) => ({
  exams: [
    ...getFilteredExams(
      getSortedExams(state.exams.allExams, state.exams.sort),
      state.exams.filters
    ),
  ],
});

export default connect(mapStateToProps)(Home);

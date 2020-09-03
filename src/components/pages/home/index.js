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
        {exams.length > 0 ? (
          <Row>
            {exams.map((exam) => (
              <ExamCard exam={exam} key={exam.id} />
            ))}
          </Row>
        ) : (
          <h5 className="display-5 text-center text-primary">
            Brak sprawdzianów
          </h5>
        )}
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

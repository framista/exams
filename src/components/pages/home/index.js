import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import PageContainer from '../../layout/page-container';

const Home = ({ exams }) => {
  return (
    <PageContainer>
      <Container>
        <h1>Welcome</h1>
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = (state) => ({
  exams: state.exams.allExams,
});

export default connect(mapStateToProps)(Home);

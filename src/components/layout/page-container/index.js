import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Div = styled.div`
  min-height: calc(100vh - 56px);
  background: ${(props) => props.background};
  transition: background 0.5s ease-in-out;
  padding: 2rem;
`;

export const PageContainer = ({ background, children }) => {
  const pageColor = background === 'primary' ? '#F8F9FA' : '#282b2f';
  return <Div background={pageColor}>{children}</Div>;
};

const mapStateToProps = (state) => ({
  background: state.theme.background,
});

export default connect(mapStateToProps)(PageContainer);

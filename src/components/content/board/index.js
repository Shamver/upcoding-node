import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as PropTypes from 'prop-types';

const Index = ({ title, icon }) => (
  <React.Fragment>
    <Container fluid>
      <h4>
        <LeftIconSpan>
          <LeftIcon icon={icon} />
        </LeftIconSpan>
        &nbsp;&nbsp;
        {title}
        {' '}
        <TitleSpan>게시판</TitleSpan>
      </h4>
    </Container>
  </React.Fragment>
);

Index.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
  }).isRequired,
};

const TitleSpan = styled.span`
    font-size: 0.9rem;
    color: gray;
`;
const LeftIconSpan = styled.span`
    text-align: center;
`;
const LeftIcon = styled(FontAwesomeIcon)`
    vertical-align: sub;
`;

export default Index;

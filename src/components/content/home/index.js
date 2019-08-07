import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as PropTypes from 'prop-types';

const Index = ({ icon, title }) => (
  <React.Fragment>
    <Container fluid>
      <h4>
        <LeftIconSpan>
          <LeftIcon icon={icon} />
        </LeftIconSpan>
        &nbsp;&nbsp;
        {title}
      </h4>
    </Container>
  </React.Fragment>
);
Index.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
  }).isRequired,
};

const LeftIconSpan = styled.span`
    text-align: center;
`;

const LeftIcon = styled(FontAwesomeIcon)`
    vertical-align: sub;
`;

export default Index;

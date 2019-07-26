import React from 'react';
import * as rs from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const LeftIconSpan = styled.span`
    text-align: center;
`;

const LeftIcon = styled(FontAwesomeIcon)`
    vertical-align: sub;
`;


const Home = ({ icon, title }) => (
  <React.Fragment>
    <rs.Container fluid>
      <h4>
        <LeftIconSpan>
          <LeftIcon icon={icon} />
        </LeftIconSpan>
                    &nbsp;&nbsp;
        {title}
      </h4>
    </rs.Container>
  </React.Fragment>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
  }).isRequired,
};

export default Home;

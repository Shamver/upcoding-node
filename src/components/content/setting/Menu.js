import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as PropTypes from 'prop-types';
import MenuCollapse from './MenuCollapse';

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
const H4 = styled.h4`
    margin-bottom : 20px;
`;


const Menu = ({ icon, title }) => (
  <React.Fragment>
    <Container fluid>
      <H4>
        <LeftIconSpan>
          <LeftIcon icon={icon} />
        </LeftIconSpan>
        &nbsp;&nbsp;
        {title}
        {' '}
        <TitleSpan>설정</TitleSpan>
      </H4>
      <MenuCollapse />
    </Container>
  </React.Fragment>
);

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string]),
  ).isRequired,
};

export default Menu;

import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import CodeGroup from './CodeGroup';

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


const Code = ({ icon, title }) => (
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
      <CodeGroup />
      <CodeGroup />
    </Container>
  </React.Fragment>
);

Code.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
  }).isRequired,
};

export default Code;

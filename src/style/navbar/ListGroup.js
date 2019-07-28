import styled from 'styled-components';
import * as rs from 'reactstrap';

const ListGroup = styled(rs.ListGroup)`
    text-align: left !important;
    background-color: #192532;
    
    @media only screen and (max-width: 1200px){
        max-height: ${({ toggled }) => (toggled === false ? 0 : 'none')}
        visibility: ${({ toggled }) => (toggled === false ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === false ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === false ? 'visibility opacity max-height 0.1s' : 'visibility opacity max-height 0.3s')}
        transition-delay: ${({ toggled }) => (toggled === false ? '0' : '0.1s')}
    }
    
    @media only screen and (min-width: 1200px) {
        max-height: ${({ toggled }) => (toggled === true ? 0 : 'none')}
        visibility: ${({ toggled }) => (toggled === true ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === true ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === true ? 'visibility opacity max-height 0.1s' : 'visibility opacity max-height 0.3s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0' : '0.1s')}
    }
`;

export default ListGroup;

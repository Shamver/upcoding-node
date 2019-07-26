import styled from 'styled-components';

const RightIconSpan = styled.span`
    height: 20px;
    width: 24px;
    line-height: 25px;
    position: absolute;
    right: 10px;
    font-size: 17px;
    
    @media only screen and (max-width: 1200px){
        visibility: ${({ toggled }) => (toggled === 'true' ? 'visible' : 'hidden')}
        opacity: ${({ toggled }) => (toggled === 'true' ? 100 : 0)}
        transition: ${({ toggled }) => (toggled === 'true' ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === 'true' ? '0.1s' : '0')}
    }
    
    @media only screen and (min-width: 1200px){
        visibility: ${({ toggled }) => (toggled === 'true' ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === 'true' ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === 'true' ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === 'true' ? '0' : '0.1s')}
    }
`;

export default RightIconSpan;

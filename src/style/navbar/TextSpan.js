import styled from 'styled-components';

const TextSpan = styled.span`
    @media only screen and (max-width: 1200px){
        visibility: ${({ toggled }) => (toggled === 'true' ? 'visible' : 'hidden')}
        opacity: ${({ toggled }) => (toggled === 'true' ? 100 : 0)}
        transition: ${({ toggled }) => (toggled === 'true' ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === 'true' ? '0.05s' : '0')}
    }
    
    @media only screen and (min-width: 1200px){
        visibility: ${({ toggled }) => (toggled === 'true' ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === 'true' ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === 'true' ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === 'true' ? '0' : '0.1s')}
    }
    
    
`;

export default TextSpan;

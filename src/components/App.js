import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import * as fa from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import * as rs from 'reactstrap';
import Header from './layout/Header';
import Home from './content/home/Home';
import Navbar from './navbar/Navbar';
import Board from './content/board/Board';
import Code from './content/code/Code';

const TextSpan = styled.span`
    @media only screen and (max-width: 1200px){
        visibility: ${({ toggled }) => (toggled === true ? 'visible' : 'hidden')}
        opacity: ${({ toggled }) => (toggled === true ? 100 : 0)}
        transition: ${({ toggled }) => (toggled === true ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0.05s' : '0')}
    }
    
    @media only screen and (min-width: 1200px){
        visibility: ${({ toggled }) => (toggled === true ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === true ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === true ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0' : '0.1s')}
    }
`;

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

const RightIconSpan = styled.span`
    height: 20px;
    width: 24px;
    line-height: 25px;
    position: absolute;
    right: 10px;
    font-size: 17px;
    
    
    @media only screen and (max-width: 1200px){
        visibility: ${({ toggled }) => (toggled === true ? 'visible' : 'hidden')}
        opacity: ${({ toggled }) => (toggled === true ? 100 : 0)}
        transition: ${({ toggled }) => (toggled === true ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0.1s' : '0')}
    }
    
    @media only screen and (min-width: 1200px){
        visibility: ${({ toggled }) => (toggled === true ? 'hidden' : 'visible')}
        opacity: ${({ toggled }) => (toggled === true ? 0 : 100)}
        transition: ${({ toggled }) => (toggled === true ? 'all 0.1s' : 'all 0.1s')}
        transition-delay: ${({ toggled }) => (toggled === true ? '0' : '0.1s')}
    }
`;

const NavbarStyled = styled.div`

    position: fixed !important;
    z-index : 1000;
    left: 0 !important;
    top : 65px !important;
    transition: width 0.3s;
    
    @media only screen and (max-width: 1199px) {
        width: ${({ toggled }) => (toggled === true ? '250px' : '0px')};
        overflow: ${({ toggled }) => (toggled === true ? 'auto' : 'hidden')};
    }
    
    @media only screen and (min-width: 1200px) {
        width: ${({ toggled }) => (toggled === true ? '64px' : '250px')};
        &:hover {
            width: 250px;
        }
        &:hover ${RightIconSpan} {
            visibility: visible;
            opacity: 100;
            transition: all 0.1s;
            transition-delay: 0.1s;
        }
        &:hover ${TextSpan} {
            visibility: visible;
            opacity: 100;
            transition: all 0.1s;
            transition-delay: 0.1s;
        }
        &:hover ${ListGroup} {
            visibility: visible;
            opacity: 100;
            max-height: none;
            transition: visibility opacity max-height 0.2s;
            transition-delay: 0.1s;
        }
    }
    
    height: 100%;
    background-color: #1a2942;
`;

const MainComponent = styled.div`
    @media only screen and (max-width: 1200px) {
    }
    
    @media only screen and (min-width: 1200px) {
        padding-left: ${({ toggled }) => (toggled === true ? '70px' : '250px')} !important;
    }
    transition: all 0.3s;
`;

const MainWrapper = styled.div`
    padding: 90px 15px 25px 15px;
    font-family : 'Jeju Gothic', 'Roboto';
    background-color : rgb(241, 242, 247);
    min-height : 100vh;
    height : 100%;
`;

const App = ({ NavbarStore }) => {
  let icon;
  if (NavbarStore.isToggleSidebar) icon = fa.faArrowRight;
  else icon = fa.faArrowLeft;

  return (
    <React.Fragment>
      <Route path="/" render={() => (<Header icon={icon} />)} />
      <NavbarStyled toggled={NavbarStore.isToggleSidebar}>
        <Navbar
          menus={[
            {
              id: 1,
              head: '게시판',
              icon: fa.faClipboardList,
              items: [
                {
                  id: 1.1,
                  name: '전체',
                  to: '/board/all',
                },
                {
                  id: 1.2,
                  name: '자유',
                  to: '/board/free',
                },
                {
                  id: 1.3,
                  name: '코딩',
                  to: '/board/coding',
                },
                {
                  id: 1.4,
                  name: 'Q&A',
                  to: '/board/qna',
                },
              ],
            },
            {
              id: 2,
              head: '데이터',
              icon: fa.faDatabase,
              items: [
                {
                  id: 2.1,
                  name: '데이터-1',
                  to: '/data/1',
                },
                {
                  id: 2.2,
                  name: '데이터-2',
                  to: '/data/2',
                },
              ],
            },
            {
              id: 3,
              head: '장비',
              icon: fa.faToolbox,
              items: [
                {
                  id: 3.1,
                  name: '장비-1',
                  to: '/device/1',
                },
                {
                  id: 3.2,
                  name: '장비-2',
                  to: '/device/2',
                },
                {
                  id: 3.3,
                  name: '장비-3',
                  to: '/device/3',
                },
              ],
            },
            {
              id: 4,
              head: '일정',
              icon: fa.faCalendarAlt,
              items: [
                {
                  id: 4.1,
                  name: '일정-1',
                  to: '/plan/1',
                },
                {
                  id: 4.2,
                  name: '일정-2',
                  to: '/plan/2',
                },
                {
                  id: 4.3,
                  name: '일정-3',
                  to: '/plan/3',
                },
                {
                  id: 4.4,
                  name: '일정-4',
                  to: '/plan/4',
                },
              ],
            },
            {
              id: 5,
              head: '설정',
              icon: fa.faCog,
              items: [
                {
                  id: 5.1,
                  name: '코드 관리',
                  to: '/setting/code',
                },
                {
                  id: 5.2,
                  name: '이메일-2',
                  to: '/email/2',
                },
                {
                  id: 5.3,
                  name: '이메일-3',
                  to: '/email/3',
                },
              ],
            },
          ]}
        />
      </NavbarStyled>
      <MainComponent toggled={NavbarStore.isToggleSidebar}>
        <MainWrapper>
          <Switch>
            {/* HOME */}
            <Route
              exact
              path="/"
              render={({ match, history, location }) => <Home match={match} history={history} location={location} title="홈" icon={fa.faHome} />}
            />

            {/* BOARD */}
            <Route
              exact
              path="/board/all"
              render={({ match, history, location }) => <Board match={match} history={history} location={location} title="전체" icon={fa.faGlobeAsia} />}
            />

            {/* QNA */}
            <Route
              exact
              path="/board/qna"
              render={({ match, history, location }) => <Board match={match} history={history} location={location} title="Q&A" icon={fa.faQuestionCircle} />}
            />
            {/* Code */}
            <Route
              exact
              path="/setting/code"
              render={({ match, history, location }) => <Code match={match} history={history} location={location} title="코드 관리" icon={fa.faCode} />}
            />
          </Switch>
        </MainWrapper>
      </MainComponent>
    </React.Fragment>
  );
};

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  NavbarStore: PropTypes.shape({
    isToggleSidebar: PropTypes.bool.isRequired,
  }).isRequired,
};


export default inject('NavbarStore')((observer)(App));

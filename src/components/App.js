import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  faArrowRight, faArrowLeft,
  faHome, faGlobeAsia, faQuestionCircle, fas,
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { ListGroup } from 'reactstrap';

import Header from './layout/Header';
import Navbar from './navbar/Navbar';

import Home from './content/home/Home';
import Board from './content/board/Board';
import Code from './content/code/Code';
import Index from './content/setting';

library.add(
  fas, fab,
);

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

const ListGroupA = styled(ListGroup)`
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
        &:hover ${ListGroupA} {
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
    background-color : rgb(241, 242, 247);
    min-height : 100vh;
    height : 100%;
`;

const App = ({ NavbarStore }) => {
  let icon;
  if (NavbarStore.isToggleSidebar) icon = faArrowRight;
  else icon = faArrowLeft;

  useEffect(() => {
    NavbarStore.getSideMenuList();
  });

  return (
    <React.Fragment>
      <Header icon={icon} />
      <NavbarStyled toggled={NavbarStore.isToggleSidebar}>
        <Navbar />
      </NavbarStyled>
      <MainComponent toggled={NavbarStore.isToggleSidebar}>
        <MainWrapper>
          <Switch>
            {/* HOME */}
            <Route
              exact
              path="/"
              render={({ match, history, location }) => <Home match={match} history={history} location={location} title="홈" icon={faHome} />}
            />

            {/* BOARD */}
            <Route
              exact
              path="/board/all"
              render={({ match, history, location }) => <Board match={match} history={history} location={location} title="전체" icon={faGlobeAsia} />}
            />

            {/* QNA */}
            <Route
              exact
              path="/board/qna"
              render={({ match, history, location }) => <Board match={match} history={history} location={location} title="Q&A" icon={faQuestionCircle} />}
            />
            {/* Code */}
            <Route
              exact
              path="/setting/code"
              render={({ match, history, location }) => <Code match={match} history={history} location={location} title="코드 관리" icon={['fas', 'cog']} />}
            />
            {/* Code */}
            <Route
              exact
              path="/setting/menu"
              render={({ match, history, location }) => <Index match={match} history={history} location={location} title="메뉴 관리" icon={['fas', 'bars']} />}
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
    getSideMenuList: PropTypes.func.isRequired,
    menus: PropTypes.array.isRequired,
  }).isRequired,
};

export default inject('NavbarStore')((withRouter)((observer)(App)));

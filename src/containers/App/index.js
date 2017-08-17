import React, { Component } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
    
`;

const SideNav = styled.div`
    position: fixed;
    padding: 25px 25px 25px 25px;
    width: 150px;
    height: 100vh;
    border-right: 1px solid black;
    background: #F5F5F5;
`;

const MainContent = styled.div`
    margin-left: 200px;
    width: 100%;
    height: 100vh;
    padding: 25px 25px 25px 25px;
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <SideNav>
                    <ul>
                        <li><a href="#/user">User</a></li>
                        <li><a href="#/tags">Tags</a></li>
                        <li><a href="#/retention">Retention</a></li>
                    </ul>
                </SideNav>
                <MainContent>
                    {this.props.children}
                </MainContent>
            </AppWrapper>
        );
    }
}

export default App;

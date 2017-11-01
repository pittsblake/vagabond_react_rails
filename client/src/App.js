import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  h1 {
    font-family: 'Bowlby One SC', cursive;
    text-shadow: 5px 8px 6px #8AE5E5;
    font-size: 100px;
    margin: 50px 0px 50px 0px;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
            <h1>Vagabond</h1>
        </Wrapper>
      </div>
    );
  }
}

export default App;

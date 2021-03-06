import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'

import City from './components/City'
import CityList from './components/CityList'
import NavBar from  './components/NavBar'
import Post from './components/Post'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  h1 {
    font-family: 'Bowlby One SC', cursive;
    text-shadow: 5px 8px 6px #39CCCC;
    font-size: 100px;
    margin: -30px 0px 50px 0px;
    color: #e5c100;
  }
`;

class App extends Component {

  state = {
    cities: []
  }

  async componentWillMount () {
    try {
      const response = await axios.get('/api/cities')
      this.setState({cities: response.data})

    } catch(error){
      console.log(error)
    }
  }

  render() {
      const CityListComponent = () => (<CityList cities={this.state.cities}/>)

    return (
      <Router>
        <div>
          <NavBar />
          <Wrapper>
            <h1>Travlr</h1>
          </Wrapper>
          <Switch>
            <Route exact path = "/" render = {CityListComponent}  />
            <Route exact path = "/cities/:cityId" component = {City} />
            <Route exact path = "/cities/:cityId/posts/:id" component = {Post} />

          </Switch>
     
        </div>
      </Router>
    );
  }
}

export default App;

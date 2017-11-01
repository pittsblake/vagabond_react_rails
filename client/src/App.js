import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CityList from './components/CityList'
import axios from 'axios'
import City from './components/City'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  h1 {
    font-family: 'Bowlby One SC', cursive;
    text-shadow: 5px 8px 6px #8AE5E5;
    font-size: 100px;
    margin: 50px 0px 50px 0px;
    color: yellow;
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
          <Wrapper>
            <h1>Vagabond</h1>
          </Wrapper>
          <Switch>
            <Route exact path = "/" render = {CityListComponent}  />
            <Route exact path = "/cities/${city.id}" render = {City} />
            <City />
          </Switch>
     
        </div>
      </Router>
    );
  }
}

export default App;

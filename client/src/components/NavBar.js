import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
`
const NavBarMargin = styled.div`
    margin: 40px;
    background-color: #3D9970;
    border-radius: 25px;
`
const ProfileStyle = styled.div`
  padding-left: 10px;
  display: flex;
  font-family: 'Bree Serif', serif;
    font-size: 18px;
  /* text-shadow: 2px 2px 2px black; */
  a {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    color: #FFDC00; 
    text-decoration: none; 
 
  }
`
const LogInStyle = styled.div`
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-family: 'Bree Serif', serif;  
  font-size: 18px;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    /* text-shadow: 2px 2px 2px black; */
    color: #FFDC00; 
  }
`
const VagabondStyle = styled.div`
  display: flex;
  flex: 50%;
  height: 70px;
  font-family: 'Bree Serif', serif;
  font-size: 28px;
  /* text-shadow: 2px 2px 2px black; */

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    color: #FFDC00; 
  }
`

class NavBar extends Component {
  render() {
    return (
      <NavBarMargin>
        <NavBarStyle>
          <VagabondStyle><Link to="/"> Vagabond </Link></VagabondStyle>
          <ProfileStyle><Link to="#"> Profile </Link></ProfileStyle>
          <LogInStyle><Link to="#"> Log In </Link></LogInStyle>
        </NavBarStyle>
      </NavBarMargin>
    );
  }
}

export default NavBar;
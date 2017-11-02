import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


const CityListStyle = styled.div`
    h1 {
        text-align: center;
    }
`

const CityLink = styled.div`
display: flex;
flex-direction: row-wrap;
justify-content: center;
`

const CityPhoto = styled.div`
      img {
          height: 300px;
          width: 300px;
          margin: 0px auto;
          display: flex;
          border-radius: 50%; 
          padding: 0px 50px 0px 50px;
          width: 300px;
          &:hover {
              height: 320px;
              width: 320px;
              border-radius: 50%
          }
      }
      text-align: center;
`

const ATag = styled.div`
    a {
        text-decoration: none;
        color: #7e6d4e;
        font-size: 30px;
        font-family: 'Bowlby One SC', cursive;
        &:hover {
            border-bottom: solid thick;
            border-bottom-color: #7e6d4e;
            text-shadow: 2px 3px 6px #39CCCC
        }
    }
    padding: 20px
`


const CityList = (props) => {
    return (
        <CityListStyle>
            <CityLink>
                {props.cities.map(city => (
                    <div key={city.id}>
                        <CityPhoto>
                            <a href={`/cities/${city.id}`}><img src={city.image} alt={city.name + "City Photo"} /> </a>
                            <ATag>
                                <a href={`/cities/${city.id}`}> {city.name} </a>
                            </ATag>
                        </CityPhoto>
                    </div>

                ))}
            </CityLink>
        </CityListStyle>
    );
}

export default CityList;
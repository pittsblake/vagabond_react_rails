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
          height: 100px;
          width: 100px;
          margin: 0px auto;
          display: flex;
          border-radius: 50%;
          padding: 0px 50px 10px 50px;
      }
      text-align: center;
    
`


const CityList = (props) => {
        return (
            <CityListStyle>
                <h1> All Cites </h1>
                <CityLink>
                    {props.cities.map(city => (
                        <div key={city.id}> 
                            <CityPhoto>
                            <img src={city.image} alt={city.name + "City Photo"} />
                            <Link to={`/cities/${city.id}`}> {city.name} </Link>
                            </CityPhoto>

                        </div>

                    ))}
                </CityLink>
            </CityListStyle>
        );
}

export default CityList;
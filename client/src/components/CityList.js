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
    
`

const CityList = (props) => {
        return (
            <CityListStyle>
                <h1> All Cites </h1>
                <div>
                    {props.cities.map(city => (
                        <div key={city.id}>
                            <Link to={`/cities/${city.id}`}> {city.name} </Link>
                            
                        </div>

                    ))}
                </div>
            </CityListStyle>
        );
}

export default CityList;
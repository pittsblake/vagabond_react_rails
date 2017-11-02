import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const CityList = (props) => {
        return (
            <div>
                <h1> All Cites </h1>
                <div>
                    {props.cities.map(city => (
                        <div key={city.id}>
                            <Link to={`/cities/${city.id}`}> {city.name} </Link>
                            
                        </div>

                    ))}
                </div>
            </div>
        );
}

export default CityList;
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import PostForm from './PostForm'
import { Link } from 'react-router-dom'

const CityTitleStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    max-width: 600px;
    box-shadow: 5px 5px 5px #E4BF2B;
  }
`
const CityFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const CityWrapper = styled.div`
  border: 1px solid red;
  margin-left: 30px;
  margin-bottom: 10px;
  padding-left: 5px;
  width: 600px;
  
`
const CityButton = styled.div`

`
const FormStyling = styled.div`
  text-align: center;
  margin: 10px;
`;

class City extends Component {
  state = {
    city: {},
    posts: []
  }

  componentWillMount() {
    const cityId = this.props.match.params.cityId
    this.fetchCityData(cityId)
  }

  fetchCityData = async (cityId) => {
    try {
      const cityData = await axios.get(`/api/cities/${cityId}`)
      console.log(cityData)
      await this.setState({
         city: cityData.data.city,
         posts: cityData.data.posts
        })

    } catch (error) {
      console.log(error)
    }
  }

  createPost = async (newPost) => {
    const cityId = this.state.city.id
    console.log(cityId)
    const res = await axios.post(`/api/cities/${cityId}/posts`, {
      post: newPost
    })
    console.log(res)
    const newPosts = [...this.state.posts]
    newPosts.push(res.data)
    this.setState({ posts: newPosts })
  }

  deletePost = async (postId) => {
    const cityId = this.state.cityId
    const res = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
      const deletedPosts = [...this.state.posts]
      console.log(deletedPosts)
      deletedPosts.pop(res.data)
    this.setState({posts: deletedPosts})
  }

  render() {
    return (
      <div>
        <CityTitleStyle>
        <h1>{this.state.city.name}</h1>
        <img src={this.state.city.image} alt={this.state.city.name + " Skyline"} />
        </CityTitleStyle>
        <FormStyling>
          <PostForm 
            createPost={this.createPost}
          />
        </FormStyling>
        {this.state.posts.map(post => (
          <div>
            <CityFlex>
            <div>
              <CityWrapper>
                <Link to= {`/cities/${this.state.city.id}/posts/${post.id}`}><h1>{post.title}</h1></Link>
                <p>{post.content}</p>
                </CityWrapper>
            </div>
              <div>
                <CityButton>
                <button onClick={() => this.deletePost(post.id)}>Delete</button>
                </CityButton>
              </div>
              </CityFlex>
            </div>
        ))}
      </div>
    );
  }
}

export default City;

// City Name
// City Photo
// Add + Delete Buttons
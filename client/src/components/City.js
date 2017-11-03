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
`;
const PostFormStyling = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const PostsHead = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;

  button {
    color: red;
    
  }
`;
const LinkStyles = styled.div`
  display: flex;
  position: relative;
  left: -40px;
`;
const PostContent = styled.div`
  display: flex;
  justify-content: flext-start;
  padding-left: 21%;
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
        <PostFormStyling>
          <PostForm 
            createPost={this.createPost}
          />
        </PostFormStyling>
        <h3>{this.state.city.name}'s Posts</h3>
          {this.state.posts.map(post => (
            <div>
        <PostsHead>
                <Link to= {`/cities/${this.state.city.id}/posts/${post.id}`} className='aLink'><h1>{post.title}</h1></Link>
                <button onClick={() => this.deletePost(post.id)} className='button'>Delete</button>
        </PostsHead>
              <PostContent>
                <p>{post.content}</p>
              </PostContent>
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
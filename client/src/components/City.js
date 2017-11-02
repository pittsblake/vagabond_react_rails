import React, { Component } from 'react';
import axios from 'axios';

import PostForm from './PostForm'

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

  render() {
    return (
      <div>
        <div>
        <h1>{this.state.city.name}</h1>
        <img src={this.state.city.image} alt={this.state.city.name + " Skyline"} />
        </div>
        {this.state.posts.map(post => (
              <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
              </div>
        ))}
        <PostForm 
          createPost={this.createPost}
        />
      </div>
    );
  }
}

export default City;

// City Name
// City Photo
// Add + Delete Buttons
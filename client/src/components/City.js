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
  h1 {
    font-family: 'Fjalla One', sans-serif;
    font-size: 30px;
    margin-bottom: 5px;

  }
`
const CityFlex = styled.div`
  display: flex;
  justify-content: safe center;

  img {
    width: 50px;
    border-radius: 50px;
    box-shadow: -2px 2px 2px black;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    float: left;
  }
`
const CityWrapper = styled.div`
  border: 1px solid red;
  background-image: url("http://www.psdgraphics.com/file/crumpled-paper.jpg");
  background-size: 800px 300px;
  background-repeat: no-repeat;
  background-color: white;
  margin-left: 30px;
  margin-bottom: 10px;
  padding-left: 5px;
  width: 600px;

  .aLink {
    text-decoration: none;
  }

  p {
    padding: 10px;
  }
  
`
const CityButton = styled.div`
margin-left: 10px;
margin-top: 12px;


`
const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border-radius: 10px;
  padding: 9px 14px;
  border: none;
  font-size: 1em;
  box-shadow: 2px 4px 5px grey;
  font-family: 'Roboto', sans-serif;
  &:hover {
    box-shadow: none;
    cursor: grab
  }
  &:active {
    cursor: grabbing
  }
`

const FormStyling = styled.div`
  text-align: center;
  margin: 10px;
`;

class City extends Component {
  state = {
    city: {},
    posts: [],
    userImage: 'http://voice4thought.org/wp-content/uploads/2016/08/default2-1.jpg'
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
    newPosts.unshift(res.data)
    this.setState({ posts: newPosts })
  }

  deletePost = async (postId) => {
    const cityId = this.state.cityId
    const res = await axios.delete(`/api/cities/${cityId}/posts/${postId}`)
    const deletedPosts = [...this.state.posts]
    console.log(deletedPosts)
    deletedPosts.pop(res.data)
    this.setState({ posts: deletedPosts })
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
        {this.state.posts.reverse().map(post => (
          <div>
            <CityFlex>
            <div>
                <img src={this.state.userImage} alt='Profile Image' />
              <CityWrapper>
                <Link to= {`/cities/${this.state.city.id}/posts/${post.id}`} className="aLink"><h1>{post.title}</h1></Link>
                <p>{post.content}</p>
                </CityWrapper>
              </div>
              <div>
                <CityButton>
                  <DeleteButton onClick={() => this.deletePost(post.id)}>Delete</DeleteButton>
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
import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const FormWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
    textarea {
      background-color:#ECEDED;  
      opacity: 0.9;
      border: none;
      width: 450px;
      height: 150px;
      font-size: 1em; 
      color: #000;
      padding: 10px;
      border-radius: 5px;   
    }
    textarea: hover{
      border: 1px solid #fff;
    }
   
`
const FormTitle = styled.div`
  font-family: 'Bree Serif', serif;
  font-size: 2em;
  
  
`
const SubmitButton = styled.button`
a {
  text-decoration: none;
  color: white
}
background-color: green;
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

class Post extends Component {
  state = {
    cityId: {},
    post: {
      title: '',
      content: ''
    },
  }


  componentWillMount(props) {
    const cityId = this.props.match.params.cityId
    const postId = this.props.match.params.id
    this.fetchPostData(postId)
    console.log(cityId)
    console.log(postId)
  }

  fetchPostData = async (id) => {
    try {
      const postData = await axios.get(`/api/cities/${this.state.cityId}/posts/${id}`)
      this.setState({ post: postData.data })
      console.log(postData)
    } catch (error) {
      console.log(error)
    }
  }

  handleUpdate = async () => {
    const { id } = this.props.match.params
    const res = await axios.patch(`/api/cities/${this.state.cityId}/posts/${id}`, {
      post: this.state.post
    })
    console.log(res)

    this.setState({ post: res.data })


  }

  handleChange = (event) => {
    const attr = event.target.name
    const updatePost = { ...this.state.post }
    updatePost[attr] = event.target.value
    this.setState({ post: updatePost })
  }


  render() {
    return (
      <div>
        <FormWrapper>
          <div>
            <FormTitle>
              {this.state.post.title}
            </FormTitle>
          </div>
          <div>
            <textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='content' value={this.state.post.content}></textarea>
            <div>
              <SubmitButton> <a href={`/cities/${this.props.match.params.cityId}`}>Submit</a> </SubmitButton>
            </div>
          </div>

        </FormWrapper>
      </div>
    );
  }
}

export default Post;
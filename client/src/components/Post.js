import React, { Component } from 'react';
import axios from 'axios'

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
      this.setState({post: postData.data})
      console.log(postData)
    } catch(error) {
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
  const updatePost = {...this.state.post}
  updatePost[attr] = event.target.value
  this.setState({ post: updatePost })
}


  render() {
    return (
      <div>
        <div>
        {this.state.post.title}
        </div>
        <div>
          <textarea onBlur={this.handleUpdate} onChange={this.handleChange} name='content' value={this.state.post.content}></textarea>
        </div>
      </div>
    );
  }
}

export default Post;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PostForm extends Component {

    state = {
        newPost: {
            title: '',
            content: ''
        },
        newPostId: '',
        redirectToCity: false
    }



    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.createPost(this.state.newPost)
    }

    handleChange = (event) => {
        const attr = event.target.name
        const updatePost = {...this.state.newPost}
        updatePost[attr] = event.target.value
        this.setState({ newPost: updatePost })
    }

    render() {

        // if (this.state.redirectToCity ) {
        //     return  <Redirect to={`/cities/${this.state.newPostId}`} />
        // }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="title" />
                    
                    <input onChange={this.handleChange} type="text" name="content"  />

                    <button>Create New Post</button>
                </form>
            </div>
        );
    }
}

export default PostForm;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components'

const FormStyle = styled.form`
    form {
    text-align: center;
    margin: 30px 300px 30px 100px;
    }
    input {
    text-align: center;
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    }
    button {
    background-color: #3D9970;
    color: #FFDC00;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    width: 60%;
    }

`
class PostForm extends Component {

    state = {
        newPost: {
            title: '',
            content: ''
        },
        newPostId: '',
        // redirectToCity: false,
    }



    handleSubmit = async (event) => {
        event.preventDefault()
        const cityId = this.props.cityId        
        this.props.createPost(this.state.newPost)
        // this.setState({ redirectToCity: true})
    }

    handleChange = (event) => {
        const attr = event.target.name
        const updatePost = {...this.state.newPost}
        updatePost[attr] = event.target.value
        this.setState({ newPost: updatePost })
    }


    render() {

        // const {cityId} = this.props.match.params       
        // if (this.state.redirectToCity ) {
        //     return  <Redirect to={`/cities/`} />
        // }

        return (
            <div>
                <FormStyle onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="title" placeholder="Title"/>
                    
                    <input onChange={this.handleChange} type="body" name="content" placeholder="Content" />

                    <button>Create New Post</button>
                </FormStyle>
            </div>
        );
    }
}

export default PostForm;
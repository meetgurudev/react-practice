import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Guru'
                    }
                })
                this.setState({ posts: updatedPosts });
            }).catch(error => {
                console.log(error);
                // this.setState({ errorProperty: true });
            })
    }

    postSelectedHandler = id => {
        this.setState({ selectedPostId: id });
    }

    render() {

        let posts = <p style={{ textAlign: "center" }}> Something went wrong</p>

        if (!this.state.errorProperty) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={this.postSelectedHandler.bind(this, post.id)} />
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;
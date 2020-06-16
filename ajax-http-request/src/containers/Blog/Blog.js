import React, { Component } from 'react';
// import axios from 'axios';

import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        errorProperty: null
    }

    componentDidMount() {
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
                this.setState({ errorProperty: true });
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
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
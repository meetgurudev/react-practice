import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <Link to='/'>Home</Link></li>
                            <li> <Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?qucik-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* Path is predefined */}
                {/* Exact is path is sensitive. */}
                {/* Render what should be rendered when this path is clicked. */}
                {/* <Route path="/" exact render={() => <div>Home</div>} />
                <Route path="/" render={() => <div>Home 2</div>} /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;
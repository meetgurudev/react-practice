import React, { Component } from 'react';
import { Route } from 'react-router';

import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <a href="/">Home</a></li>
                            <li> <a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* Path is predefined */}
                {/* Exact is path is sensitive. */}
                {/* Render what should be rendered when this path is clicked. */}

                <Route path="/" exact render={() => <div>Home</div>} />
                <Route path="/" render={() => <div>Home 2</div>} />
            </div>
        );
    }
}

export default Blog;
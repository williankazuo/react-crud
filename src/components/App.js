import React from 'react'
import Post from './Post'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Post title="Post1"></Post>
                <Post title="Post2"></Post>
                <Post title="Post3"></Post>
            </div>
        );
    }
}
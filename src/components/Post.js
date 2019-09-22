import React from 'react'
import Comment from './Comments'

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            newCommentText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        })

        this.setState({ newCommentText: '' })
        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState({ newCommentText: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newCommentText} onChange={this.handleTextChange}></input>
                    <button type="submit">Comment</button>
                    {this.state.comments.map((data, index) => {
                        return <Comment key={index} text={data.text}></Comment>
                    })}
                </form>
            </div>
        );
    }
}
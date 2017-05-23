import React, { Component } from 'react'
import './CSS/Comment.css'

class Comment extends Component {
    
    render() {
        return (
            <form hidden = {this.props.clicked}>
                <input type="text"/>
                <button type="submit"> Comment </button>
            </form>
        )
    }
}

export default Comment;
import React, { Component } from 'react'
import './CSS/Comment.css'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            comments: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addComment = this.addComment.bind(this)
    }
    handleChange(ev) {
        this.setState({
            comment: ev.targetValue
        })
    }
    addComment(ev) {
        
        const state = {...this.state}
        const comment = {
            text: state.comment,
            time: new Date()
        }
        state.comments.push(comment)
        state.comment = ''
        this.setState(state)

    }

    render() {
        return (
            <div>
            <form hidden = {this.props.clicked} onSubmit = {this.addComment}>
                <input type="text" value = {this.state.comment} onChange = {this.handleChange}/>
                <button type="submit" className = "button"> Comment </button>
                {this.state.comments.map((comment, ind) => {
                    return (
                        <div className = "comment" key = {ind}>
                            <div> {comment.text} </div>
                        </div>
                    )})}
                
            </form>
            </div>
        )
    }
}

export default Comment;
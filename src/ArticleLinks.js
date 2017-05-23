import React, { Component } from 'react' 
import './CSS/ArticleLinks.css'
import Comment from './Comment.js'

class ArticleLinks extends Component {
    constructor() {
        super()
        this.state = {
            hidden: true
        }
    }
    
    showComments(e) {
        const condition = this.state.hidden;
        this.setState({hidden: !condition});
        //console.log(this.state.hidden)
    }
    

    render() {
        
        return (
            <div className="article-links">
                <a className="article-link" href="#" onClick ={this.showComments.bind(this)}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
                <p> </p>
                <Comment clicked={this.state.hidden}/>
           </div>
        )

    }


    

}

export default ArticleLinks;
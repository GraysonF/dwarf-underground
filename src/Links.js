import React, { Component } from 'react'
import './CSS/Links.css'

class Links extends Component {
    render() {
        return (
            <div className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={this.props.img} alt="orc" />
                    <p>{this.props.text}</p>
                </a>  
            </div>
        )
    }
}

export default Links;
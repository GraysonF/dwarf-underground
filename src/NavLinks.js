import React, { Component } from 'react'
import './CSS/NavLinks.css'



class NavLinks extends Component {
    render() {
        const links = this.props.links.map((link, id) => <a href = "#" key = {id}> {link} </a>)
        return (<div className="float-right nav-links">
            {links}
        </div>)
    }
}
export default NavLinks;
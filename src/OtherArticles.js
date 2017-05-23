import React, { Component } from 'react'
import './CSS/OtherArticles.css';
import Links from './Links.js'

class OtherArticles extends Component {
    constructor() {
        super()
        
        function Link(img, text) {
            this.image = img;
            this.text = text;
        }
        this.state = {
            LinkArr: [
                new Link("https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif"
            ,"Single Orcs in Indianapolis"),
            new Link("https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg"
            ,"You won't believe what's under this mountain"),
            new Link("http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg"
            ,"Mine 20% more gold with One Weird Trick"),
            new Link("http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg"
            ,"Surprise for Indiana Hobbits born before 1999")]
        }
        
    }

    render() {
        return (
         <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>

          {this.state.LinkArr.map((obj, index) => {
            return <Links key = {index} img={obj.image} text={obj.text}/>
          })}
            
      </div>
        )
    }
}

export default OtherArticles;
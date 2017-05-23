import React, { Component } from 'react';
import './CSS/App.css';
import Header from './Header.js'
import Title from './Title.js'
import ArticleInfo from './ArticleInfo.js'
import ArticleBody from './ArticleBody.js'
import ArticleLinks from './ArticleLinks.js'
import Ad from './Ad.js'
import OtherArticles from './OtherArticles.js'
import Footer from './Footer.js'
import Links from './Links.js'
import Comment from './Comment.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <Title />
        <ArticleInfo />
        <ArticleBody />
        <ArticleLinks />
        <br/>
      </div>
      <aside className="large-4 medium-12 columns">
        <Ad />
      </aside>
      <OtherArticles />
    </main>
      <Footer />
      </div>
    );
  }
}

export default App;

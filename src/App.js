import React, { Component } from 'react';
import NavBar from './components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <NavBar />
        <Route exact path ='/' component={Home} />
        <Route path ='/about' component={About} />
        <Route path ='/contact' component={Contact} />
        <Route path ="/:post_id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

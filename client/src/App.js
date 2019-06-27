import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import decode from 'jwt-decode'
import {
  createVideo,
  readAllVideos, 
  loginUser, 
  registerUser,
  readUser,
  destroyUser,
  updateUser,
  createArticle,
  updateArticle,
  readAllArticles,
  readOneArticle,
  destroyArticle

} from './Services/api-helper'

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        
      }
    }
  render () {
    return (
      <div>

      </div>
    )
  }
}

export default withRouter(App);

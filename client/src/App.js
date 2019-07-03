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
        videos: [],
        currentVideo: 0,
        userFormData: {
          username: "",
          password: "",
          pic: ""
        },
        authFormData: {
          username: "",
          password: ""
        },
        currentUser: null,
        videoUrl: "",
        user_id: "",
        userVids: []
      }
    }

  async componentDidMount() {
    const checkUser = localStorage.getItem("jwt")
    if (checkUser) {
      const user = await decode(checkUser)
      this.setState({currentUser: user})
    }
    if (this.state.currentUser) {
      this.getUser()
    }
    await this.getAllVideos()
    if (this.state.currentUser) {
      this.getUserVideos()
      this.getUserArticles()
    }
    this.setState({currentVideo: Math.ceil(Math.random() * (this.state.videos.length - 1))})
  }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Auth~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
async handleLogin() {
  try {
    const userData = await loginUser(this.state.authFormData)
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
    this.setState({authFormData: {
      username: "",
      password: ""
    }})
    await this.getUser()
    this.props.history.push(`/users/${this.state.currentUser.username}`)
  } catch (error) {
    console.log(error)
    alert("Invalid credentials")
    this.setState({authFormData: {
      username: "",
      password: ""
    }})
  }
}

async handleRegisterLogin() {
  const userData = await loginUser(this.state.userFormData)
  this.setState({
    currentUser: decode(userData.token)
  })
  localStorage.setItem("jwt", userData.token)
  this.setState({userFormData: {
    username: "",
    password: "",
    pic: ""
  }})
}

async handleRegister(e) {
  e.preventDefault()
  try {
    await registerUser(this.state.userFormData)
    await this.handleRegisterLogin()
    await this.getUser()
    this.props.history.push(`/users/${this.state.currentUser.username}`)
  } catch (error) {
    console.log(error)
    alert(error)
  }
}

handleLogout() {
  localStorage.removeItem("jwt")
  this.setState({
    currentUser: null
  })
  this.props.history.push('/login')
}

handleUserChange(e) {
  const {name, value} = e.target
  this.setState(prevState => ({
    userFormData: {
      ...prevState.userFormData,
      [name]: value
    }
  }))
}

authHandleChange(e) {
  const {name, value} = e.target
  this.setState(prevState => ({
    authFormData: {
      ...prevState.authFormData,
      [name]: value
    }
  }))
}

async getUser() {
  const user = await readUser(
    this.state.currentUser.user_id
      ||
    this.state.currentUser.id
  )
  this.setState({currentUser: user})
}
  render () {
    return (
      <div>

      </div>
    )
  }
}

export default withRouter(App);

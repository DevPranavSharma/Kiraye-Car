import React from 'react';
import './App.css';
import HomePage from '../src/components/HomePage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import FAQ from './components/FAQ';
import BookCar from './components/BookCar';
import axios from 'axios';
import Support from './components/Support'
import CarType from './components/CarType'
import ShowCar from './components/ShowCar'
import Cookie from "js-cookie"
import Loader1 from './components/Loader1'
import DashBoard from './components/DashBoard'
import ChangePassword from './components/ChangePassword'
import RecentBookedCars from './components/RecentBookedCars'
import ReturnCar from './components/ReturnCar'

export default class App extends React.Component{

  state={
    auth:false,
    load:false,
    user:{},
  }

  componentDidMount()
  {
    axios.get("https://kiraye-car.herokuapp.com/user/me").then(res=>{
      //console.log(res)
      this.setState({user:res.data,load:true})
    }).catch(e=>{this.setState({load:true})})
  }

  handleAuthChange = (newAuth,userData) => {
    this.setState({auth:newAuth,user:userData})
  }

  render()
  {

    var token = Cookie.get('jwtToken');
    let auth=this.state.auth;
    if (token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
        auth=true;
      } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
      }
      console.log("auth:"+auth)

    if(!this.state.load)
      return <Loader1 />

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path = "/" render = { () =>
              <HomePage auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
              } />
             <Route exact path = "/login" render = { () =>
              <Login auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
              } />
             <Route exact path = "/signup" render = { () =>
              <SignUp auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
            } />
            <Route exact path = "/cartype" render = { () =>
              <CarType auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
            } />
            <Route exact path = "/dashboard" render = { () =>
              <DashBoard auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
            } />
            <Route exact path = "/showcar" render = { () =>
              <ShowCar auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
            } />
            <Route exact path = "/bookcar/:carid" render = { () =>
              <BookCar auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
            } />
            <Route exact path = "/recentbookedcars" render = { () =>
              <RecentBookedCars auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
            } />
            <Route exact path = "/returncar" render = { () =>
              <ReturnCar auth = {auth} changeAuth = {this.handleAuthChange} user={this.state.user} />
            } />
             <Route exact path = "/support" component = {Support} />
             <Route exact path = "/faq" component = {FAQ}/>
             <Route exact path = "/changepassword/" component = {ChangePassword} />
          </Switch>
        </Router>
      </div>
    );
  }
}


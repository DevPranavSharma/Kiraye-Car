import React from 'react';
import './App.css';
import HomePage from '../src/components/HomePage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import FAQ from './components/FAQ';
import axios from 'axios';
import Support from './components/Support'
import CarType from './components/CarType'
import ShowCar from './components/ShowCar'
import Cookie from "js-cookie"

export default class App extends React.Component{

  state={
    auth:false
  }

  handleAuthChange = (newAuth) => {
    this.setState({auth:newAuth})
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
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path = "/" render = { () =>
              <HomePage auth = {auth} changeAuth = {this.handleAuthChange} />
              } />
             <Route exact path = "/login" render = { () =>
              <Login auth = {auth} changeAuth = {this.handleAuthChange} />
              } />
             <Route exact path = "/signup" render = { () =>
              <SignUp auth = {auth} changeAuth = {this.handleAuthChange} />
            } />
            <Route exact path = "/cartype" render = { () =>
              <CarType auth = {auth} changeAuth = {this.handleAuthChange} />
            } />
             <Route exact path = "/support" component = {Support} />
             <Route exact path = "/faq" component = {FAQ}/>
             <Route exact path = "/showcar/" component = {ShowCar} />
          </Switch>
        </Router>
      </div>
    );
  }
}


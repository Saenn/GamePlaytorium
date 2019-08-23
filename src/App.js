import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import 'semantic-ui-css/semantic.min.css'
import Game2 from './pages/Paitortub'
import Game1 from './pages/Painai'

class App extends Component {
  render() {
    return (
      <div className="pages">      
        <Switch> 
            <Route path='/game2' component={Game2}></Route> 
            <Route path='/game1' component={Game1}></Route> 
            <Route path='/' component={Home}></Route>                 
        </Switch>
      </div>
    );
  }
}

export default App;

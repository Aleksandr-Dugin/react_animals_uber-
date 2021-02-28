import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Main, Rate, Header, Categories, News, Support, Posts} from './components'; 
import './App.css'; 

const App = ()=> {
  
  return (
    <>
    <Router>     
        <Switch>
            <Route path='/home' component={Header}/>
            <Route exact path='/' component={Main}/>
            <Route exact path='/home/posts' component={Posts}/>
            <Route exact path='/home/rank' component={Rate}/>
            <Route exact path='/home/categories' component={Categories}/>
            <Route exact path='/home/news' component={News}/>
            <Route exact path='/home/support' component={Support}/>


        </Switch>
    </Router>
    </> 
  )
}


export default App;
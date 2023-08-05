import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Switch>
          <Route  exact path="/"> <News key="General"  pageSize={8} country="in" category="general"/> </Route>
          <Route exact path="/business"> <News key="Business" pageSize={8} country="in" category="business"/> </Route>
          <Route exact path="/entertainment"> <News key="Entertainment" pageSize={8} country="in" category="entertainment"/> </Route>
          <Route exact path="/health"> <News key="Health" pageSize={8} country="in" category="health"/> </Route>
          <Route exact path="/science"> <News key="Science" pageSize={8} country="in" category="science"/> </Route>
          <Route exact path="/sport"> <News key="Sport" pageSize={8} country="in" category="sport"/> </Route>
          <Route exact path="/technology"> <News key="Technology" pageSize={8} country="in" category={'technology'}/> </Route>
         
        </Switch>

        </Router>
       
      </div>
    )
  }
}

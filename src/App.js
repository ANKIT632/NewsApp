import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route 

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY;
  
  state={
    progress :0
  }

  // lodind bar top of nav
 setProgress=(progress)=>{
   this.setState({progress :progress})
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <NavBar />
          <Switch>
            <Route exact path="/"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={6} country="in" category="general" /> </Route>

            <Route exact path="/business"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={6} country="in" category="business" /> </Route>

            <Route exact path="/entertainment"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={6} country="in" category="entertainment" /> </Route>

            <Route exact path="/health"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={6} country="in" category="health" /> </Route>

            <Route exact path="/science"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={6} country="in" category="science" />      </Route>

            <Route exact path="/sport"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="Sport" pageSize={6} country="in" category="sport" /> </Route>

            <Route exact path="/technology"> <News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={6} country="in" category={'technology'} /> </Route>

          </Switch>

        </Router>

      </div>
    )
  }
}

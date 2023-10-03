import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, SetNewProgress] = useState(0);

  // loding bar top of nav
  const setProgress = (progress) => {
    SetNewProgress(progress)
  }


  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Switch>
          <Route exact path="/"> <News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={6} country="in" category="general" /> </Route>

          <Route exact path="/business"> <News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={6} country="in" category="business" /> </Route>

          <Route exact path="/entertainment"> <News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={6} country="in" category="entertainment" /> </Route>

          <Route exact path="/health"> <News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={6} country="in" category="health" /> </Route>

          <Route exact path="/science"> <News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={6} country="in" category="science" />      </Route>

          <Route exact path="/sport"> <News setProgress={setProgress} apiKey={apiKey} key="Sport" pageSize={6} country="in" category="sport" /> </Route>

          <Route exact path="/technology"> <News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={6} country="in" category={'technology'} /> </Route>

        </Switch>

      </Router>

    </div>
  )
}


export default App;
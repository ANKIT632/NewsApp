import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Footer from './Components/Footer';


const App = () => {
  
  
  const [progress, SetNewProgress] = useState(0);

  // loding bar top of nav
  const setProgress = (progress) => {
    SetNewProgress(progress)
  }


  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path="/" element={ <News setProgress={setProgress} key="General" pageSize={6} country="in" category="general" />}/> 

          <Route exact path="/business" element={<News setProgress={setProgress} key="Business" pageSize={6} country="in" category="business" /> }/>  

          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={6} country="in" category="entertainment" />}/> 

          <Route exact path="/health" element={<News setProgress={setProgress} key="Health" pageSize={6} country="in" category="health" />
}/> 
          <Route exact path="/science" element={<News setProgress={setProgress} key="Science" pageSize={6} country="in" category="science" /> }/> 

          <Route exact path="/sport" element={<News setProgress={setProgress} key="Sport" pageSize={6} country="in" category="sport" />}/> 

          <Route exact path="/technology" element={ <News setProgress={setProgress} key="Technology" pageSize={6} country="in" category={'technology'} />}/>

        </Routes>
<Footer/>
      </Router>

    </>
  )
}


export default App;
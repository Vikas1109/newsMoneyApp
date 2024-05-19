
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsItem from './Components/NewsItem';
import News from './Components/News';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';


export default class App extends Component {

  name = "Vikas Chauhan";

  state ={
    progress : 0
  }
 setProgress = (progress) =>{
  this.setState({progress:progress})
 }
  render() {
    return (
      <>
      <Navbar/>

      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />

      {/* <News pageSize={5} category = {"sports"}/> */}
      {/* <About /> */}
     
 <BrowserRouter>
      <Routes>
          <Route path="/" element={  <News  setProgress = {this.setProgress} pageSize={5} category = {"general"}/>} />
          <Route path="/science" element={ <News setProgress = {this.setProgress} pageSize={5} category = {"science"}/>} />
        
          <Route exact path="/health" element={ <News setProgress = {this.setProgress} pageSize={5} category = {"health"}/>} />
          <Route exact path="/sports" element={ <News setProgress = {this.setProgress} pageSize={5} category = {"sports"}/>} />
          <Route exact path="/business" element={ <News setProgress = {this.setProgress} pageSize={5} category = {"business"}/>} />
          <Route exact path="/entertainment" element={ <News setProgress = {this.setProgress} pageSize={5} category = {"entertainment"}/>} />
          <Route exact path="/technology" element={ <News setProgress = {this.setProgress} pageSize={5} category = {"technology"}/>} />
         
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        
         
        
         
         
      </Routes>
    </BrowserRouter>  
      
      </>
    )

  }
}



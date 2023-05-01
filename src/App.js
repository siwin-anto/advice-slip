import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// export default class App extends Component {

//         state = { advice : ''};

//         componentDidMount(){
//          this.fetchData();
//         }
        
//         fetchData = () => {
//             axios.get('https://api.adviceslip.com/advice')  
//                 .then( re => {
//                     const {advice} = re.data.slip
//                         this.setState({advice});
//                 })
//                 .catch(error =>{
//                         console.log(error);
//                 });
//         }

//     render() {
//         return (
//             <div className='app'>
//                 <div className='card'>  
//                     <h1 className='heading'>{this.state.advice}</h1>
//                     <button className='button' onClick={this.fetchData}> 
//                         <span>
//                             Click for advice
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

 const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((re) => {
        const { advice } = re.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={() =>fetchData()}>
          <span>Click for advice</span>
        </button>
      </div>
    </div>
  );
};

export default App



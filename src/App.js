import './App.css';
import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className="container">
        <svg id="back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#07A6F0"/>
        </svg>

        <svg id="close" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
        </svg>


        <div className="login">Login with email</div>
        <div className="email"><input type="text" placeholder="Enter your Email Address"></input></div>

        <svg id="line" width="360" height="1" viewBox="0 0 360 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="-4.37114e-08" y1="0.5" x2="360" y2="0.499969" stroke="#07A6F0"/>
        </svg>


        <button type="submit" id="cont">Continue</button>

        <div className="option">or</div>

        <button type="submit" id="fb">Login with Facebook account</button>
        <svg id="fbb" width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77778 24.113V13.5169H11.3333L11.8889 9.38995H7.77778V6.82456C7.77778 5.59764 8.11111 4.81687 9.77778 4.81687H12V1.02456C11.6667 1.02456 10.3333 0.913025 8.77778 0.913025C5.66667 0.913025 3.55556 2.80918 3.55556 6.37841V9.38995H0V13.5169H3.55556V24.113H7.77778Z" fill="white"/>
        </svg>

      </div>
          );
        }
      }
 export default App;
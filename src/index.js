// const React = require("react")
// const ReactDOM = require("react-dom")

// ES6
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// function App() {
//   // return React.createElement("h1", null, 'This is React APP.')
//   return React.createElement("div", null, [
//     React.createElement("h1", null, "My Profile"),
//     React.createElement("p", null, "My name is Janny"),
//     React.createElement("button", null, "Check my profile")
//   ])
// }

// JSX version
// function name 開頭一定要大寫
// 必須要用一個 div 包起來 因為任何一個 javascript 都只能回傳一個值
// function App() {
//   return (
//     <div>
//       <h1>My Profile</h1>
//       <p>My name is Janny</p>
//       <button>Check my profile</button>
//     </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  , document.querySelector("#root"))
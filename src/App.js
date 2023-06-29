import logo from './logo.svg';
import './App.css';
import React from 'react';
export default class App extends React.Component{

render() {
  return (
    <div className="App">
      
      <nav className='nav'>
        <ul>
          <li> <a href='#'>Home</a></li>
          <li> <a href='#'>Help</a></li>
          <li> <a href='#'>Class</a></li>
          <li> <a href='#'>About us</a></li>
        </ul>
      </nav>
      <div className='h3'><h3 >Login</h3></div>
      
      <input placeholder='email'></input>
      <input placeholder='password'></input>

    </div>
  );
}
}
// export default App;

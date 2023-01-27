import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

const App = () => {
  return (
    <div className="login-container">
      
      <div className="login-form">
        <form>
       <h1>Login</h1>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};




export default App;

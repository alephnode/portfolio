import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      hovered: false
    }
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      hovered: !state.hovered
    };
  }

  render() {
    return (
      <div className="App">
        <div className="white-block"></div>
        <div className="black-block"></div>
        <div className="App-container">
          <div className="App-background"></div>
          <div className="App-info">
            <h1 className="App-title">stephen<span>ward</span></h1>
            <p className="App-intro">
              Full-stack developer currently building apps in<br/>JavaScript, Python, and Elixir.*
            </p>
            <hr className="first-hr" />
            <hr className="second-hr" />
            <hr className="last-hr" />
            <p className="mission">
              <br/>
              * Here to float through walls, not<br/>sink into floors.
            </p>
          </div>
          <div className="contact" onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>reach me</div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import  MarkdownView  from "./components/MarkdownView";
import marked from "marked";
import ResultView from "./components/ResultView";
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      convertedMarkDown: ''
    }

    this.convertMarkDown = this.convertMarkDown.bind(this)

  }

  // Convert Mard
  convertMarkDown(event) {
    const convertedMarkDown = marked(event.target.value)
    this.setState({
      convertedMarkDown
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Mark It Down</h1>
        <p>A MarkDown Converter</p>
        <MarkdownView handleChange={this.convertMarkDown}/>
        <ResultView result={this.state.convertedMarkDown}/>
      </div>
    );
  }
}

export default App;

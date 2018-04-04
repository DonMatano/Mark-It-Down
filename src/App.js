import React, { Component } from 'react';
import  MarkdownView  from "./components/MarkdownView";
import marked from "marked";
import ResultView from "./components/ResultView";
import {
  Grid,
  Row,
  Col,
  PageHeader
} from "react-bootstrap";
import './styles/css/App.css';

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
        <Grid fluid>
          <PageHeader className="heading text-center">
            Mark It Down
          </PageHeader>  

          <a href='https://guides.github.com/features/mastering-markdown/' target='_'>What is mark down?</a>       
            
          <Grid >
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <MarkdownView class='markdownView' handleChange={this.convertMarkDown} />
              </Col>
              <Col xs={12} md={6}>
                <ResultView class='resultView' result={this.state.convertedMarkDown} />
              </Col>
            </Row>
          </Grid>
          {/* <div className="wrapper">
            <MarkdownView class='markdownView' handleChange={this.convertMarkDown}/>
            <ResultView class='resultView' result={this.state.convertedMarkDown}/>
          </div> */}
        </Grid>

        <footer className='mt-2'>
          <div className="container">
              <p className="text-center">Created by <a href="https://github.com/DonMatano" target='_'>Matano Mwakima.</a> </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

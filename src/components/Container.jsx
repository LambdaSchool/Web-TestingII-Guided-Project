import React, { Component } from 'react';
import axios from 'axios';
import Quotes from './Quotes';
import './Container.less';

// fetch quotes from a quotes api and display them
// { id: '123', text: 'Use postman!!' }

export default class Container extends Component {
  state = { quotes: [] }

  getQuotes = () => {
    axios.get('https://quotes.org/api')
      .then(res => {
        this.setState({ quotes: res.data });
      });
  }

  render() {
    return (
      <div className='container-hello-world'>
        Hello, World! {this.props.lady}

        <Quotes quotes={this.state.quotes} />

        <button onClick={this.getQuotes}>
          get those quotes
        </button>
      </div>
    );
  }
}

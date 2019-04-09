import React, { Component } from 'react';
import axios from 'axios';
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

        {
          this.state.quotes.map(q => (
            <div key={q.id}>{q.text}</div>
          ))
        }

        <button onClick={this.getQuotes}>
          get those quotes
        </button>
      </div>
    );
  }
}

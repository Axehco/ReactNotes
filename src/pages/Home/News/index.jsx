import React, { Component } from 'react';

class News extends Component {

  /* componentDidMount() {
    setInterval(() => {
      this.props.history.push('/home/message')
    }, 3000)
  } */

  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    );
  }
}

export default News;
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/styles.css';

const Hello = React.createClass({
  render() {
    return <h1>Hello, world</h1>;
  }
});

ReactDOM.render(<Hello />, document.querySelector('#content'));

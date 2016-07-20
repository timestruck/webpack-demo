import React from 'react';
import { Component } from 'react';
import styles from './Header.styl';

export default class Header extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <header className={styles.header}>
        <h1>Hellos, {this.state.count}</h1>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>Add</button>
      </header>
    );
  }
}

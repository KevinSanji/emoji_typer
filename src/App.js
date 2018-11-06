import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ClapTyper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emoji: '💪'
    }
  }

  _onChange(text) {
    this.setState({
      text: text
    })
  }

  _onSelectChange(emoji) {
    this.setState({
      emoji: emoji
    })
  }

  _changeText(text) {
    return text.split(/\s+/).join(' ' + this.state.emoji + ' ');
  }

  render() {
    return(
      <div>
        <input type="text" onChange={(e) => this._onChange(e.target.value)}></input>
        <select value={this.state.emoji} onChange={(e) => this._onSelectChange(e.target.value)}>
          <option>👏</option>
          <option>✋</option>
          <option>🖖</option>
        </select>
        <textarea value={this._changeText(this.state.text)}></textarea>
      </div>
    )
  }
}

export default ClapTyper;

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

  onChange(text) {
    this.setState({
      text: text
    })
  }

  onSelectChange(emoji) {
    this.setState({
      emoji: emoji
    })
  }

  changeText(text) {
    return text.split(/\s+/).join('{this.state.emoji}');
  }

  render() {
    return(
      <div>
        <input type="text" onChange={(e) => this.onChange(e.target.value)}></input>
        <select value={this.state.emoji} onChange={(e) => this.onSelectChange(e.target.value)}>
          <option>👏</option>
          <option>✋</option>
          <option>🖖</option>
        </select>
        <textarea value={this.changeText(this.state.text)}></textarea>
      </div>
    )
  }
}

export default ClapTyper;

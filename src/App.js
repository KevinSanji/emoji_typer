import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class emojiTyper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emoji: '👏'
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
        <h1>Emoji Typer</h1>
        <input type="text" placeholder="Type shit here" onChange={(e) => this._onChange(e.target.value)}></input>
        <select value={this.state.emoji} onChange={(e) => this._onSelectChange(e.target.value)}>
          <option value="👏">👏</option>
          <option value="👏🏻">👏🏻</option>
          <option value="👏🏼">👏🏼</option>
          <option value="👏🏾">👏🏾</option>
          <option value="👏🏽">👏🏽</option>
          <option value="👏🏿">👏🏿</option>
        </select>
        <textarea placeholder="Because of an extremely complex algorithm, your shit will now have emojis in it" value={this._changeText(this.state.text)}></textarea>
        <a href={"https://twitter.com/intent/tweet?text=" + this._changeText(this.state.text)}>Tweet</a>
        <br></br>
        <br></br>
        <p>This isn’t my idea. Reverse engineered from <a href="https://github.com/marcusmolchany/clap-typer">Marcus Molchany</a> for fun</p>
      </div>
    )
  }
}

export default emojiTyper;

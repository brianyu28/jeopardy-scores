import React from 'react';
import ContentEditable from "react-contenteditable";
import './Podium.css';


export default class Podium extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      field: ""
    };
  }

  render() {
    return (
      <div className="podium">
        CS51 Jeopardy
        <Score score={this.state.score} />
        <Nameplate />
        <input className="add-field" value={this.state.field} onChange={this.updateField} />
        <button onClick={this.addToScore} className="add-button">Add to Score</button>
      </div>
    );
  }

  updateField = (event) => {
    this.setState({
      field: event.target.value
    });
  }

  addToScore = (event) => {
    const value = parseInt(this.state.field);
    if (isNaN(value))
      return;
    this.setState(state => ({
      score: state.score + value
    }));
  }
}

class Score extends React.Component {
  render() {
    return (
      <div className="score">
        ${this.props.score}
      </div>
    )
  }
}

class Nameplate extends React.Component {
  render() {
    return (
      <div className="nameplate">
        <ContentEditable
          html={"Team Name"}
        />
      </div>
    )
  }
}
import React from "react";

class TwitterMessage extends React.Component {
  state={
    message: ""
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleCharCounter = () => {
    let {message} = this.state
    return (this.props.maxChars - message.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessage}/>
        <p>{this.handleCharCounter()}</p>
      </div>
    );
  }
}

export default TwitterMessage;

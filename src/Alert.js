import React, { Component } from 'react';

// Base component
class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

// Subclass 1
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.position = 'relative';
  }
}

// Subclass 2
class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.position = 'relative';
  }
}

//Subclass 3
class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
    this.position = 'relative';
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <a className={this.props.buttonType} href={this.props.link}>
        {this.props.text}
      </a>
    );
  }
}

export default Button;

import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className={this.props.buttonType}>
        {this.props.text}
      </div>
    );
  }
}

export default Button;

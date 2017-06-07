import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import PropTypes from 'prop-types';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.hideNotification(), 3000);
  }

  handleDismiss() {
    this.props.hideNotification();
  }

  render() {
    return (
      <Message
        success
        content={this.props.message}
        onDismiss={this.handleDismiss}
      />
    );
  }
}

export default MessageContainer;

MessageContainer.PropTypes = {
    message: PropTypes.string,
    hideNotification: PropTypes.func.isRequired
}
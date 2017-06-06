import React, { Component } from "react";
import { Message } from "semantic-ui-react";

class MessageContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => this.props.hideNotification(), 2000);
  }

  handleDismiss() {
    this.props.hideNotification();
  }

  render() {
    return (
      <div>
        {this.state.visible &&
          <Message
            success
            header={this.props.header}
            content={this.props.message}
            onDismiss={this.handleDismiss}
          />}
      </div>
    );
  }
}

export default MessageContainer;

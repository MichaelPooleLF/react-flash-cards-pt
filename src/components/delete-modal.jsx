import React from "react";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({
      isOpened: true
    })
  }

  close() {
    this.setState({
      isOpened: false
    })
  }

  render() {
    if (this.state.isOpened === true) {
      return (
        <h1 className="text-center text-light">My Opened Modal</h1>
      )
    } else {
      return (
        <h1 className="text-center text-light">My Closed Modal</h1>
      )
    }
  }
}

export default DeleteModal;

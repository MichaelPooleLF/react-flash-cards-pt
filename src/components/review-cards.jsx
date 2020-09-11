import React from "react";

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "back"
    };
    this.index = 0;
  }

  componentDidMount() {
    this.props.setActiveCard(this.index);
  }

  nextCard() {
    this.index++;
    this.setActiveCard(this.index)
  }

  render() {
    return (
      <h1 className="text-center">Review Cards</h1>
    );
  }
}

export default ReviewCards

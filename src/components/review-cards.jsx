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
    if (this.index === this.props.numberOfCards) {
      this.index = 0;
    }
    this.setActiveCard(this.index);
  }

  previousCard() {
    this.index--;
    if (this.index === -1) {
      this.index = this.props.numberOfCards - 1;
    }
    this.setActiveCard(this.index);
  }

  render() {
    return (
      <h1 className="text-center">Review Cards</h1>
    );
  }
}

export default ReviewCards

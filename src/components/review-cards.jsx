import React from "react";

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "question"
    };
    this.index = 0;
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  createReviewBoard() {
    const side = this.state.side;
    const activeCard = this.props.activeCard;
    if (activeCard) {
      return (
        <div className="container mt-5">
          <div className="row review-row">
            <i onClick={this.previousCard} className="fa fa-angle-left" aria-hidden="true"></i>
            <div onClick={this.flipCard} className="card review-card">
              <div className={`card-body ${side}`}>
                <h2 className="card-title">{activeCard[side]}</h2>
              </div>
            </div>
            <i onClick={this.nextCard} className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      )
    } else {
      return (
        <h2 className="text-center text-light mt-5"><em>Please add some cards to start reviewing!</em></h2>
      )
    }
  }

  componentDidMount() {
    this.props.setActiveCard(this.index);
  }

  nextCard() {
    this.index++;
    if (this.index === this.props.numberOfCards) {
      this.index = 0;
    }
    this.props.setActiveCard(this.index);
  }

  previousCard() {
    this.index--;
    if (this.index === -1) {
      this.index = this.props.numberOfCards - 1;
    }
    this.props.setActiveCard(this.index);
  }

  flipCard() {
    if (this.state.side === "question") {
      this.setState({
        side: "answer"
      })
    } else {
      this.setState({
        side: "question"
      })
    }
  }

  render() {
    return (
      <>
        <h1 className="text-center text-light">Review Cards</h1>
        {/* <div className="container mt-5">
          <div className="row review-row">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <div className="card review-card">
              <div className={`card-body ${this.state.side}`}>
                <h2 className="card-title">{this.props.activeCard[this.state.side]}</h2>
              </div>
            </div>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div> */}
        {this.createReviewBoard()}
      </>
    );
  }
}

export default ReviewCards

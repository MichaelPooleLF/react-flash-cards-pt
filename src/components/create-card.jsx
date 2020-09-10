import React from "react";

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
      id: this.props.cardId
    }, console.log(this.props.cardId))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCard(this.state);
    this.props.updateId();
    this.handleReset(event);
  }

  handleReset(event) {
    event.target.reset();
    this.props.setView("view-cards");
  }

  render() {
    return (
      <>
        <h1 className="text-center">Create New Card</h1>
        <form className="container mt-5" onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <textarea onChange={this.handleChange} className="form-control" type="text" name="question" id="question"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer</label>
            <textarea onChange={this.handleChange} className="form-control" type="text" name="answer" id="answer"></textarea>
          </div>
          <div className="form-group d-flex justify-content-end mt-5">
            <button type="submit" className="btn btn-outline-primary">Add Card</button>
            <button type="reset" className="btn btn-outline-danger ml-3">Cancel</button>
          </div>
        </form>
      </>
    );
  };
}

export default CreateCard

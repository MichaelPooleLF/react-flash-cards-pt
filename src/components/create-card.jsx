import React from "react";

function CreateCard(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const formQuestion = event.target.question.value;
    const formAnswer = event.target.answer.value;
    const card = {
      question: formQuestion,
      answer: formAnswer
    }
    props.addCard(card);
    handleReset(event);
  }

  function handleReset(event) {
    event.target.reset();
    props.setView("view-cards");
  }

  return (
    <>
      <h1 className="text-center">Create New Card</h1>
      <form className="container mt-5" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <textarea className="form-control" type="text" name="question" id="question"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <textarea className="form-control" type="text" name="answer" id="answer"></textarea>
        </div>
        <div className="form-group d-flex justify-content-end mt-5">
          <button type="submit" className="btn btn-outline-primary">Add Card</button>
          <button type="reset" className="btn btn-outline-danger ml-3">Cancel</button>
        </div>
      </form>
    </>
  );
}

export default CreateCard

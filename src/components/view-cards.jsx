import React from "react";

function DeleteModal(props) {
  if (props.isModalOpen) {
    return (
      <div className="modal-overlay hidden">
        <div className="card modal-int bg-dark text-light">
          <div className="card-body">
            <h2 className="modal-title">Are you sure you want to delete this card?</h2>
            <div className="col mb-4">
              <div className="card h-100 text-dark">
                <div className="card-body border-bottom border-dark question">
                  <h5 className="card-title">Question:</h5>
                  <p className="card-text">{props.card.question}</p>
                </div>
                <div className="card-body answer">
                  <h5 className="card-title">Answer:</h5>
                  <p className="card-text">{props.card.answer}</p>
                </div>
              </div>
            </div>
            <div>
              <button onClick={props.deleteCard} className="btn btn-success">Yes, Delete This Card!</button>
              <button onClick={props.close} className="btn btn-danger ml-3">No, I Want To Keep It.</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}

function CreateCards(props) {
  let cardArray = "";
  if (props.cards) {
    cardArray = props.cards.map((element, index) => {
      return (
        <div key={element.id} className="col mb-4">
          <div className="card h-100">
            <div className="card-body border-bottom border-dark question">
              <h5 className="card-title">Question:</h5>
              <i onClick={props.deleteCard} className="fa fa-times" id={index}></i>
              <p className="card-text">{element.question}</p>
            </div>
            <div className="card-body answer">
              <h5 className="card-title">Answer:</h5>
              <p className="card-text">{element.answer}</p>
            </div>
          </div>
        </div>
      )
    });
  }
  return cardArray;
}

function ViewCards(props) {
  return (
    <>
      <h1 className="text-center text-light">My Cards</h1>
      <div className="container">
        <div className="row row-cols-4 row-cols-md-3 text-dark mt-5">
          <CreateCards cards={props.cards} deleteCard={props.deleteCard}/>
        </div>
      </div>
      <DeleteModal deleteCard={props.deleteCard} close={props.close} card={props.activeCard} isModalOpen={props.isModalOpen} />
    </>
  );
}

export default ViewCards

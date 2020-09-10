import React from "react";

function CreateCards(props) {
  const cardArray = props.cards.map(element => {
    return (
      <div key={element.id} className="col mb-4">
        <div className="card h-100">
          <div className="card-body border-bottom border-dark">
            <h5 className="card-title">Question:</h5>
            <p className="card-text">{element.question}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Answer:</h5>
            <p className="card-text">{element.answer}</p>
          </div>
        </div>
      </div>
    )
  });

  return cardArray;
}

function ViewCards(props) {
  return (
    <>
      <h1 className="text-center">My Cards</h1>
      <div className="container">
        <div className="row row-cols-4 row-cols-md-3 text-dark mt-5">
          <CreateCards cards={props.cards} />
        </div>
      </div>
    </>
  );
}

export default ViewCards

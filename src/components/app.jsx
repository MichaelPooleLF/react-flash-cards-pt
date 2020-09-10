import React from "react";
import ViewCards from "./view-cards";
import Review from "./review-cards";
import CreateCard from "./create-card";
import Nav from "./nav"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "create-card",
      cards: []
    };
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(viewState) {
    event.preventDefault();
    this.setState({
      view: viewState
    })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView={this.setView} />;
      case 'review-cards':
        return <Review />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards() {
    const myCards = JSON.stringify(this.state.cards);
    localStorage.setItem("flash-cards", myCards);
  }

  addCard(card) {
    const myCards = this.state.cards.map(element => ({...element}));
    myCards.push(card);
    this.setState({
      cards: myCards
    }, this.saveCards());
  }

  render() {
    console.log(this.state.cards);
    return (
      <>
        <Nav setView={this.setView} />
        {this.getView()}
      </>
    );
  };
};

export default App;

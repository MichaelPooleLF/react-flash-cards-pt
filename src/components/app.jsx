import React from "react";
import ViewCards from "./view-cards";
import Review from "./review-cards";
import CreateCard from "./create-card";
import Nav from "./nav"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {},
      view: "create-card",
      cards: []
    };
    this.newCardId = 0;
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.updateNewCardId = this.updateNewCardId.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
  }

  componentDidMount() {
    const savedCards = JSON.parse(localStorage.getItem("flash-cards"));
    const currentId = parseFloat(localStorage.getItem("current-id"));
    if (currentId) {
      this.newCardId = currentId;
    }
    console.log(this.newCardId);
    if (savedCards !== null) {
      this.setState({
        cards: savedCards
      })
    }
  }

  updateNewCardId(){
    this.newCardId++;
    localStorage.setItem("current-id", this.newCardId);
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
        return <CreateCard addCard={this.addCard} setView={this.setView}
        updateId={this.updateNewCardId} cardId={this.newCardId}/>;
      case 'review-cards':
        return <Review activeCard={this.state.activeCard} setActiveCard={this.setActiveCard}/>;
      case 'view-cards':
        return <ViewCards cards={this.state.cards}/>;
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
    }, this.saveCards)
  }

  setActiveCard(index) {
    const cards = this.state.cards.map(element => ({...element}))
    this.setState({
      activeCard: cards[index]
    })
  }

  render() {
    const myCards = localStorage.getItem("flash-cards");
    return (
      <>
        <Nav setView={this.setView} />
        {this.getView()}
      </>
    );
  };
};

export default App;

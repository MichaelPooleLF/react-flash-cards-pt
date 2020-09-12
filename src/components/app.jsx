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
      view: "view-cards",
      cards: [],
      isModalOpen: false
    };
    this.newCardId = 0;
    this.setView = this.setView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.updateNewCardId = this.updateNewCardId.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const savedCards = JSON.parse(localStorage.getItem("flash-cards"));
    const currentId = parseFloat(localStorage.getItem("current-id"));
    if (currentId) {
      this.newCardId = currentId;
    }
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
        return <Review activeCard={this.state.activeCard} setActiveCard={this.setActiveCard}
        numberOfCards={this.state.cards.length}/>;
      case 'view-cards':
        return <ViewCards cards={this.state.cards} deleteCard={this.deleteCard}
        isModalOpen={this.state.isModalOpen} activeCard={this.state.activeCard}
        close={this.close}/>;
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
    });
  }

  deleteCard(event) {
    if (!this.state.isModalOpen) {
      const cardToDelete = event.target.getAttribute("id");
      this.setActiveCard(cardToDelete);
      this.open();
    } else {
      this.close();
      const myCards = this.state.cards.map(element => ({...element}));
      myCards.forEach((element, index) => {
        if (element.id === this.state.activeCard.id) {
          myCards.splice(index, 1);
        }
      });
      console.log(myCards);
      this.setState({
        cards: myCards,
        activeCard: {}
      }, this.saveCards);
    }
  }

  open() {
    this.setState({
      isModalOpen: true
    })
  }

  close() {
    this.setState({
      isModalOpen: false
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

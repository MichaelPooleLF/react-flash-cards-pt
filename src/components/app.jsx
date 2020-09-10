import React from "react";
import ViewCards from "./view-cards";
import Review from "./review-cards";
import CreateCard from "./create-card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "view-cards"
    };
  }

  setView(view) {
    this.setState({
      view: view
    })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <Review />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  render() {
    return (
      <>
        {this.getView()}
      </>
    );
  };
};

export default App;

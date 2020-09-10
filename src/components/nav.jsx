import React from "react";

function Nav(props) {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse justify-content-end">
        <div className="navbar-nav">
          <a onClick={() => props.setView("view-cards")} href="" className="nav-item nav-link">View Cards</a>
          <a onClick={() => props.setView("review-cards")} href="" className="nav-item nav-link">Review Cards</a>
          <a onClick={() => props.setView("create-card")} href="" className="nav-item nav-link">Create New Card</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav

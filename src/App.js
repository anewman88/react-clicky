//imports dependencies and files
import React, { Component } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import DisplayCard from "./components/DisplayCard";
//import Footer from "./components/Footer";
import card from "./card.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    card,
    clickedCard: [],
    score: 0
  };

//when you click on a card ... the card is taken out of the array
  imageClick = event => {
    const currentCard = event.target.alt;
    const CardAlreadyClicked =
      this.state.clickedCard.indexOf(currentCard) > -1;

//if you click on a card that has already been selected, the game is reset and cards reordered
    if (CardAlreadyClicked) {
      this.setState({
        card: this.state.card.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCard: [],
        score: 0
      });
        alert("You lose. Play again?");

    //if available card clicked, score is increased and cards reordered
    } else {
      this.setState(
        {
          card: this.state.card.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCard: this.state.clickedCard.concat(currentCard),
          score: this.state.score + 1
        },
        //if all 12 cards are clicked, display a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              card: this.state.card.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCard: [],
              score: 0
            });
          }
        }
      );
    }
  };

//render the components of the main screen: header, jumbotron, displaycard 
  render() {
    return (
      <div>
        <Header 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.card.map(card => (
            <DisplayCard
              imageClick={this.imageClick}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;

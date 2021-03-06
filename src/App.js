import React, { Component } from 'react';
import Navbar from "./components/navbar/";
import Jumbotron from "./components/jumbotron"
import CarouselItem from "./components/carousel-items";
import Footer from "./components/footer"
import { Carousel } from "react-materialize";
import characters from "./characters.json";

// app class that renders the elements to be called in index.js
class App extends Component {
  state = {
    status: "Click An Image To Begin",
    score: 0,
    topScore: 0,
    chars: characters,
    rand: Math.random(),
  };

  // shuffle function for arrays (not needed anymore, im going to spin the carousel on click instead)
  // (need yarn package pure-react-carousel in order to do this by all research in react)
  // (then set the hasMasterSlider to true and activate the slider on the handleclick and then deactivate it.)
  // shuffle = array => {
  //   var currentIndex = array.length, temporaryValue, randomIndex;
  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //   return array;
  // };

  // game reset function for win
  setGameStart = () => {
    this.setState({
      status: "Great Job! Click An Image To Begin Again",
      score: 0,
      topScore: 0,
      chars: characters,
      rand: Math.random()
    });
  };

  // game reset function for loss
  setGameLoss = () => {
    this.setState({
      status: "You guessed wrong! Click An Image To Try Again!",
      score: 0,
      chars: characters,
      rand: Math.random()
    });
  };

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  setTopScore = () => {
    if (this.state.topScore < 12) {
      if (this.state.score >= this.state.topScore) {
        this.setState({
          topScore: this.state.topScore + 1
        });
      }
    }
    else {
      this.setGameStart();
    }
    if (this.state.topScore === 12) {
      this.setState({
        status: this.state.status + 1
      });
    }
  };

  // on click set up a function to keep track of the users characters already selected and shuffle if 
  // game is not over
  handleClick = props => {
    const newArray = [...this.state.chars];
    const index = newArray.indexOf(props);
    newArray[index] = { ...props };

    if (newArray[index].clicked === false) {
      newArray[index].clicked = true;
      // increment score after changing clicked to true
      this.incrementScore();

      // set the top score if score is higher than current top score and then set the newstate for status and shuffled array
      this.setTopScore();
      this.setState({
        chars: characters,
        status: "Nice Choice!",
        rand: Math.random(),
      });
    } else if (newArray[index].clicked === true) {
      console.log("You Guessed Incorrectly!");
      this.setGameLoss();
    }
  };


  render() {
    return (
      <>
        <Navbar status={this.state.status} score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Carousel id={this.state.rand}>
          {this.state.chars.map(character => (
            <CarouselItem
              handleClick={this.handleClick}
              id={character.id}
              key={character.id}
              alt={character.alt}
              src={character.src}
              character={character}
            />
          ))}
        </Carousel>
        <Footer />
      </>
    );
  }
}



export default App;

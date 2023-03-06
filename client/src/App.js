import { useState, useEffect } from "react";
import './App.css';
import SingleCard from "./components/SingleCard";

const cardImages = [
  { "src": "img/blackHole1.png" },
  { "src": "img/blackHole2.png" },
  { "src": "img/blackHole3.png" },
  { "src": "img/bloodSplatter.png" },
  { "src": "img/explodingStar.png" },
]



function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log("Match")
        resetTurn();
      } else {
        console.log("No Match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }


  return (
    <div className="App">
      <h1>MemeMatch</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
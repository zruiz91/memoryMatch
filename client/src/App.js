import { useState, useEffect } from "react";
import './App.css';

const cardImages = [
  {"src": "img/blackHole1.png"},
  {"src": "img/blackHole2.png"},
  {"src": "img/blackHole3.png"},
  {"src": "img/bloodSplatter.png"},
  {"src": "img/explodingStar.png"},
]



function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);



  //shuffle cards
  const shuffleCards = ()  => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card =>({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>MemeMatch</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front"  height="250"/>
              <img className="back" src="/img/cover.png" alt="card back" height="250"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
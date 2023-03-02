import { useState, useEffect } from "react";


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
    </div>
  );
}

export default App;
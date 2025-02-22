import React, { useState, useEffect } from "react";
import ReactSwipe from "react-swipe";
import "./styles.css";

const fetchFlashcards = async () => {
  const response = await fetch("http://localhost:3001/flashcards");
  const data = await response.json();
  return data;
};

const Flashcard = ({ card }) => {
  return (
    <div className="flashcard">
      <h1 className="hiragana">{card.hiragana}</h1>
      <h2 className="romaji">{card.romaji}</h2>
      <p className="memory-aid">{card.memoryAid}</p>
      <div className="examples">
        {card.exampleWords.map((word, index) => (
          <p key={index}>
            {word.word} ({word.romaji}) - {word.meaning}
          </p>
        ))}
      </div>
    </div>
  );
};

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  let reactSwipeEl;

  useEffect(() => {
    fetchFlashcards().then((data) => {
      setFlashcards(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {flashcards.map((card, index) => (
          <div key={index} className="flashcard-container">
            <Flashcard card={card} />
          </div>
        ))}
      </ReactSwipe>
      <div className="buttons">
        <button className="prev-button" onClick={() => reactSwipeEl.prev()}>
          ⬅️ Previous
        </button>
        <button className="next-button" onClick={() => reactSwipeEl.next()}>
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default FlashcardApp;
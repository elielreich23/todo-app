import React, {useState} from 'react'
// import {Form} from "../elements/Form.jsx"
import './style.scss'


const Todo = () => {
// const [isToggled, setIsToggled] = useState(false) 
  const [cards, setCards] = useState([]);
  const [newCardText, setNewCardText] = useState("");

  const handleAddCard = () => {
    if (newCardText.trim() !== "") {
      setCards([...cards, { id: Date.now(), text: newCardText }]);
      setNewCardText("");
    }
  };

  const handleDeleteCard = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
   <>
    {/* i want to create the card sections still didn't figure it all out  */}
    <div className="card-section">
      <h2>Card Section</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <p>{card.text}</p>
            <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="card-header">
        
        <button onClick={handleAddCard}>+</button>
      </div>
    </div>
   </>
  );
};


export default Todo
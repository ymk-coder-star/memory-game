import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';

const memoryCards = [
	{ src: `${process.env.PUBLIC_URL}/img/potion-1.png`, matched: false },
	{ src: `${process.env.PUBLIC_URL}/img/helmet-1.png`, matched: false },
	{ src: `${process.env.PUBLIC_URL}/img/ring-1.png`, matched: false },
	{ src: `${process.env.PUBLIC_URL}/img/scroll-1.png`, matched: false },
	{ src: `${process.env.PUBLIC_URL}/img/shield-1.png`, matched: false },
	{ src: `${process.env.PUBLIC_URL}/img/sword-1.png`, matched: false },
];

function App() {
	//Set all states
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	//Shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...memoryCards, ...memoryCards]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		resetTurn();
		setTurns(0);
	};

	//Assign cards selected
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	//Reset after turn
	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurns) => ++prevTurns);
		setDisabled(false);
	};

	//Evaluate match and map accordingly
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			if (choiceOne.src === choiceTwo.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				setTimeout(resetTurn, 1000);
			}
		}
	}, [choiceOne, choiceTwo]);

	//Shuffle on load page
	useEffect(() => {
		shuffleCards();
	}, []);

	return (
		<div className="App">
			<h1>Memory game</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="grid-container">
				{cards.map((card) => (
					<SingleCard
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
			<p>Turns: {turns}</p>
		</div>
	);
}

export default App;

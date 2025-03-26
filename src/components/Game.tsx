import React, { useState, useEffect } from 'react';
import { Category, Animal } from '../types/game';
import { soundManager } from '../utils/sound';
import './Game.css';

interface GameProps {
  category: Category;
  onGameOver: (score: number) => void;
}

const Game: React.FC<GameProps> = ({ category, onGameOver }) => {
  const [currentAnimal, setCurrentAnimal] = useState<Animal | null>(null);
  const [options, setOptions] = useState<Animal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [showCorrect, setShowCorrect] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    generateNewRound();
  }, []);

  const generateNewRound = () => {
    const randomAnimal = category.animals[Math.floor(Math.random() * category.animals.length)];
    setCurrentAnimal(randomAnimal);
    setSelectedAnimal(null);
    setShowCorrect(false);

    // Generate 3 random wrong options
    const wrongOptions = category.animals
      .filter((animal) => animal.id !== randomAnimal.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    // Combine correct and wrong options and shuffle
    const allOptions = [...wrongOptions, randomAnimal].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
  };

  const handleAnswer = (selectedAnimal: Animal) => {
    if (showCorrect) {
      // If showing correct answer, only allow clicking the correct one
      if (selectedAnimal.id === currentAnimal?.id) {
        soundManager.playCorrect();
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
          generateNewRound();
        }, 1000);
      }
      return;
    }

    setSelectedAnimal(selectedAnimal);
    if (selectedAnimal.id === currentAnimal?.id) {
      soundManager.playCorrect();
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        generateNewRound();
      }, 1000);
    } else {
      soundManager.playIncorrect();
      setShowCorrect(true);
    }
  };

  return (
    <div className="game">
      <button className="back-button" onClick={() => onGameOver(0)}>
        ← Back to Categories
      </button>
      <div className="game-content">
        <h2>Find the {currentAnimal?.name}!</h2>
        <div className="options-grid">
          {options.map((animal) => (
            <button
              key={animal.id}
              className={`option-button ${
                selectedAnimal?.id === animal.id ? 'selected' : ''
              } ${
                showCorrect && animal.id === currentAnimal?.id ? 'correct' : ''
              } ${
                showCorrect && selectedAnimal?.id === animal.id && animal.id !== currentAnimal?.id ? 'incorrect' : ''
              } ${
                isAnimating && animal.id === currentAnimal?.id ? 'animate' : ''
              }`}
              onClick={() => handleAnswer(animal)}
              disabled={showCorrect && animal.id !== currentAnimal?.id}
            >
              <span className="animal-emoji">{animal.image}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game; 
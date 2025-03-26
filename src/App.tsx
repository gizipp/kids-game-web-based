import { useState } from 'react'
import CategorySelection from './components/CategorySelection'
import Game from './components/Game'
import { Category } from './types/game'
import './App.css'

function App() {
  const [gameState, setGameState] = useState<'category' | 'playing'>('category')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category)
    setGameState('playing')
  }

  const handlePlayAgain = () => {
    setGameState('category')
    setSelectedCategory(null)
  }

  return (
    <div className="app">
      {gameState === 'category' && (
        <CategorySelection onSelectCategory={handleCategorySelect} />
      )}
      {gameState === 'playing' && selectedCategory && (
        <Game
          category={selectedCategory}
          onGameOver={handlePlayAgain}
        />
      )}
    </div>
  )
}

export default App

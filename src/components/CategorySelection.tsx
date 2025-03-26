import React from 'react';
import { Category } from '../types/game';
import { categories } from '../data/gameData';

interface CategorySelectionProps {
  onSelectCategory: (category: Category) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelectCategory }) => {
  return (
    <div className="category-selection">
      <h1>Choose a Category</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-button"
            onClick={() => onSelectCategory(category)}
          >
            <h2>{category.name}</h2>
            <div className="category-preview">
              {category.animals.slice(0, 3).map((animal) => (
                <span key={animal.id} className="animal-emoji">
                  {animal.image}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection; 
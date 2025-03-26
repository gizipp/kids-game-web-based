export type Category = {
  id: string;
  name: string;
  animals: Animal[];
};

export type Animal = {
  id: string;
  name: string;
  image: string;
};

export type GameState = {
  currentCategory: Category | null;
  score: number;
  timeLeft: number;
  isGameActive: boolean;
}; 
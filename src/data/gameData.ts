import { Category } from '../types/game';

export const categories: Category[] = [
  {
    id: 'ocean',
    name: 'Ocean',
    animals: [
      { id: 'dolphin', name: 'Dolphin', image: '🐬' },
      { id: 'whale', name: 'Whale', image: '🐋' },
      { id: 'octopus', name: 'Octopus', image: '🐙' },
      { id: 'fish', name: 'Fish', image: '🐠' },
      { id: 'turtle', name: 'Turtle', image: '🐢' },
      { id: 'shark', name: 'Shark', image: '🦈' },
      { id: 'crab', name: 'Crab', image: '🦀' },
      { id: 'jellyfish', name: 'Jellyfish', image: '🪼' },
      { id: 'seal', name: 'Seal', image: '🦭' },
      { id: 'shrimp', name: 'Shrimp', image: '🦐' },
      { id: 'lobster', name: 'Lobster', image: '🦞' }
    ],
  },
  {
    id: 'jungle',
    name: 'Jungle',
    animals: [
      { id: 'lion', name: 'Lion', image: '🦁' },
      { id: 'elephant', name: 'Elephant', image: '🐘' },
      { id: 'monkey', name: 'Monkey', image: '🐒' },
      { id: 'giraffe', name: 'Giraffe', image: '🦒' },
      { id: 'zebra', name: 'Zebra', image: '🦓' },
      { id: 'tiger', name: 'Tiger', image: '🐯' },
      { id: 'panda', name: 'Panda', image: '🐼' },
      { id: 'koala', name: 'Koala', image: '🐨' },
      { id: 'gorilla', name: 'Gorilla', image: '🦍' },
      { id: 'rhino', name: 'Rhino', image: '🦏' },
      { id: 'hippopotamus', name: 'Hippopotamus', image: '🦛' },
      { id: 'orangutan', name: 'Orangutan', image: '🦧' }
    ],
  },
  {
    id: 'farm',
    name: 'Farm',
    animals: [
      { id: 'cow', name: 'Cow', image: '🐄' },
      { id: 'pig', name: 'Pig', image: '🐷' },
      { id: 'chicken', name: 'Chicken', image: '🐔' },
      { id: 'sheep', name: 'Sheep', image: '🐑' },
      { id: 'horse', name: 'Horse', image: '🐎' },
      { id: 'duck', name: 'Duck', image: '🦆' },
      { id: 'goat', name: 'Goat', image: '🐐' },
      { id: 'turkey', name: 'Turkey', image: '🦃' },
      { id: 'rabbit', name: 'Rabbit', image: '🐰' },
      { id: 'donkey', name: 'Donkey', image: '🦓' },
      { id: 'llama', name: 'Llama', image: '🦙' },
      { id: 'mouse', name: 'Mouse', image: '🐁' }
    ],
  },
  {
    id: 'birds',
    name: 'Birds',
    animals: [
      { id: 'eagle', name: 'Eagle', image: '🦅' },
      { id: 'owl', name: 'Owl', image: '🦉' },
      { id: 'parrot', name: 'Parrot', image: '🦜' },
      { id: 'penguin', name: 'Penguin', image: '🐧' },
      { id: 'flamingo', name: 'Flamingo', image: '🦩' },
      { id: 'peacock', name: 'Peacock', image: '🦚' },
      { id: 'swan', name: 'Swan', image: '🦢' },
      { id: 'dove', name: 'Dove', image: '🕊️' },
      { id: 'rooster', name: 'Rooster', image: '🐓' },
      { id: 'ostrich', name: 'Ostrich', image: '🦤' }
    ],
  },
  {
    id: 'insects',
    name: 'Insects',
    animals: [
      { id: 'butterfly', name: 'Butterfly', image: '🦋' },
      { id: 'bee', name: 'Bee', image: '🐝' },
      { id: 'ant', name: 'Ant', image: '🐜' },
      { id: 'ladybug', name: 'Ladybug', image: '🐞' },
      { id: 'cricket', name: 'Cricket', image: '🦗' },
      { id: 'spider', name: 'Spider', image: '🕷️' },
      { id: 'scorpion', name: 'Scorpion', image: '🦂' },
      { id: 'mosquito', name: 'Mosquito', image: '🦟' },
      { id: 'caterpillar', name: 'Caterpillar', image: '🐛' },
      { id: 'fly', name: 'Fly', image: '🪰' },
      { id: 'cockroach', name: 'Cockroach', image: '🪳' },
      { id: 'beetle', name: 'Beetle', image: '🪲' }
    ],
  },
  {
    id: 'arctic',
    name: 'Arctic',
    animals: [
      { id: 'polar-bear', name: 'Polar Bear', image: '🐻‍❄️' },
      { id: 'seal', name: 'Seal', image: '🦭' },
      { id: 'penguin', name: 'Penguin', image: '🐧' },
      { id: 'arctic-fox', name: 'Arctic Fox', image: '🦊' },
      { id: 'narwhal', name: 'Narwhal', image: '🦈' },
      { id: 'walrus', name: 'Walrus', image: '🦭' }
    ],
  },
  {
    id: 'desert',
    name: 'Desert',
    animals: [
      { id: 'camel', name: 'Camel', image: '🐪' },
      { id: 'snake', name: 'Snake', image: '🐍' },
      { id: 'lizard', name: 'Lizard', image: '🦎' },
      { id: 'scorpion', name: 'Scorpion', image: '🦂' },
      { id: 'eagle', name: 'Eagle', image: '🦅' }
    ],
  },
  {
    id: 'pets',
    name: 'Pets',
    animals: [
      { id: 'dog', name: 'Dog', image: '🐕' },
      { id: 'cat', name: 'Cat', image: '🐈' },
      { id: 'hamster', name: 'Hamster', image: '🐹' },
      { id: 'goldfish', name: 'Goldfish', image: '🐠' },
      { id: 'parrot', name: 'Parrot', image: '🦜' },
      { id: 'guinea-pig', name: 'Guinea Pig', image: '��' }
    ],
  }
]; 
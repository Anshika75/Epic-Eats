import { RecipeType } from "./recipe.model";

export const RecipeData: RecipeType[] = [
  {
    id: 'r1',
    name: 'Spaghetti Bolognese',
    imagePath: 'https://example.com/spaghetti-bolognese.jpg',
    calories: 350,
    ingredients: [
      { name: 'Spaghetti', amount: '200g' },
      { name: 'Ground Beef', amount: '300g' },
      { name: 'Tomato Sauce', amount: '150ml' },
      { name: 'Onion', amount: '1, chopped' },
      { name: 'Garlic', amount: '2 cloves' }
    ],
    type: 'non-veg',
    cuisine: 'Italian',
    steps: [
      'Boil water and cook spaghetti according to package instructions.',
      'In a pan, sauté onion and garlic until soft.',
      'Add ground beef and cook until browned.',
      'Stir in tomato sauce and let it simmer for 15 minutes.',
      'Serve the sauce over the spaghetti.'
    ],
    date: new Date('2024-01-01'),
    favourite: true, // New field
    serves: 4, // New field
    timeTaken: '30 minutes', // New field
    tags: ['Pasta', 'Main Course'] // New field
  },
  {
    id: 'r2',
    name: 'Vegetable Stir Fry',
    imagePath: 'https://example.com/vegetable-stir-fry.jpg',
    calories: '200-250',
    ingredients: [
      { name: 'Broccoli', amount: '1 cup' },
      { name: 'Carrots', amount: '1/2 cup, sliced' },
      { name: 'Bell Peppers', amount: '1/2 cup, sliced' },
      { name: 'Soy Sauce', amount: '2 tbsp' },
      { name: 'Garlic', amount: '2 cloves' }
    ],
    type: 'veg',
    cuisine: 'Chinese',
    steps: [
      'Heat oil in a wok over medium heat.',
      'Add garlic and sauté for a few seconds.',
      'Add vegetables and stir fry for 5-7 minutes.',
      'Add soy sauce and cook for another 2 minutes.',
      'Serve hot with rice or noodles.'
    ],
    date: new Date('2024-02-15'),
    favourite: false, // New field
    serves: 2, // New field
    timeTaken: '15 minutes', // New field
    tags: ['Healthy', 'Quick', 'Vegetarian'] // New field
  },
  {
    id: 'r3',
    name: 'Chicken Curry',
    imagePath: 'https://example.com/chicken-curry.jpg',
    calories: 500,
    ingredients: [
      { name: 'Chicken', amount: '500g' },
      { name: 'Onion', amount: '1, chopped' },
      { name: 'Tomato', amount: '1, chopped' },
      { name: 'Curry Powder', amount: '2 tbsp' },
      { name: 'Coconut Milk', amount: '200ml' }
    ],
    type: 'non-veg',
    cuisine: 'Indian',
    steps: [
      'Heat oil in a pan and sauté onions until golden brown.',
      'Add chicken and cook until lightly browned.',
      'Stir in tomatoes and curry powder, cook for 2 minutes.',
      'Pour in coconut milk and simmer for 20 minutes.',
      'Serve with rice or naan.'
    ],
    date: new Date('2024-03-10'),
    favourite: true, // New field
    serves: 4, // New field
    timeTaken: '40 minutes', // New field
    tags: ['Spicy', 'Comfort Food', 'Dinner'] // New field
  },
  {
    id: 'r4',
    name: 'Quinoa Salad',
    imagePath: 'https://example.com/quinoa-salad.jpg',
    calories: 300,
    ingredients: [
      { name: 'Quinoa', amount: '1 cup' },
      { name: 'Cucumber', amount: '1/2 cup, diced' },
      { name: 'Cherry Tomatoes', amount: '1/2 cup, halved' },
      { name: 'Feta Cheese', amount: '1/4 cup' },
      { name: 'Lemon Juice', amount: '2 tbsp' }
    ],
    type: 'veg',
    cuisine: 'Mediterranean',
    steps: [
      'Cook quinoa according to package instructions.',
      'In a bowl, mix quinoa, cucumber, cherry tomatoes, and feta cheese.',
      'Drizzle with lemon juice and toss to combine.',
      'Chill in the fridge for 20 minutes before serving.'
    ],
    date: new Date('2024-04-05'),
    favourite: false, // New field
    serves: 2, // New field
    timeTaken: '25 minutes', // New field
    tags: ['Salad', 'Healthy', 'Vegetarian'] // New field
  }
];

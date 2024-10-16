import { RecipeType } from "../models/recipe.model";

export const RecipeData: RecipeType[] = [ 
  {
    id: 'r1',
    name: 'Spaghetti Bolognese',
    imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
    calories: 350,
    description: 'A classic Italian pasta dish with a rich and savory meat sauce served over spaghetti.',
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
    isFavorite: false,
    serves: 4,
    timeTaken: '30 mins',
    tags: ['Pasta', 'Sides'],
    imgTag: 'Breakfast'
  },
  {
    id: 'r2',
    name: 'Vegetable Stir Fry',
    imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
    calories: '200-250',
    description: 'A quick and healthy Chinese stir-fry packed with colorful vegetables and soy sauce.',
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
    isFavorite: false,
    serves: 2,
    timeTaken: '15 mins',
    tags: ['Healthy', 'Quick', 'Vegetarian'],
    imgTag: 'Main Course'
  },
  {
    id: 'r3',
    name: 'Chicken Curry',
    imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
    calories: 500,
    description: 'A flavorful Indian curry with tender chicken pieces simmered in coconut milk and spices.',
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
    isFavorite: false,
    serves: 4,
    timeTaken: '40 mins',
    tags: ['Spicy', 'Comfort Food', 'Dinner'],
    imgTag: 'Main Course'
  },
  {
    id: 'r4',
    name: 'Quinoa Salad',
    imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
    calories: 300,
    description: 'A light and refreshing Mediterranean quinoa salad with cucumber, cherry tomatoes, and feta cheese.',
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
    isFavorite: false,
    serves: 2,
    timeTaken: '25 mins',
    tags: ['Salad', 'Healthy', 'Vegetarian'],
    imgTag: 'Snacks'
  }
];

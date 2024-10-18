import { RecipeType } from "../models/recipe.model";

const RecipeData: RecipeType[] = [ 
  // Indian Cuisine
{
  id: 'r1',
  name: 'Butter Chicken',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 480,
  description: 'A rich and creamy curry made with marinated chicken and a blend of spices.',
  ingredients: [
    { name: 'Chicken', amount: '500g, diced' },
    { name: 'Butter', amount: '50g' },
    { name: 'Onion', amount: '1, chopped' },
    { name: 'Tomato Puree', amount: '200g' },
    { name: 'Cream', amount: '100ml' },
    { name: 'Garam Masala', amount: '1 tbsp' },
    { name: 'Cilantro', amount: 'for garnish' }
  ],
  type: 'non-veg',
  cuisine: 'Indian',
  steps: [
    'Marinate chicken in yogurt and spices for at least 1 hour.',
    'In a pan, melt butter and sauté onions until golden brown.',
    'Add marinated chicken and cook until no longer pink.',
    'Stir in tomato puree and cream, simmer for 15 minutes.',
    'Garnish with cilantro and serve with naan or rice.'
  ],
  date: new Date('2024-01-01'),
  isFavorite: false,
  serves: 4,
  timeTaken: '1 hour',
  tags: ['Curry', 'Dinner'],
  imgTag: 'Main Course'
},

{
  id: 'r2',
  name: 'Paneer Tikka',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'Grilled marinated paneer cubes served with mint chutney.',
  ingredients: [
    { name: 'Paneer', amount: '250g, cubed' },
    { name: 'Yogurt', amount: '100g' },
    { name: 'Ginger-Garlic Paste', amount: '1 tbsp' },
    { name: 'Spices', amount: '1 tbsp (tandoori masala)' },
    { name: 'Bell Peppers', amount: '1 cup, diced' },
    { name: 'Mint Chutney', amount: 'to serve' }
  ],
  type: 'veg',
  cuisine: 'Indian',
  steps: [
    'Marinate paneer in yogurt and spices for 30 minutes.',
    'Skewer paneer and vegetables, then grill or bake until golden.',
    'Serve with mint chutney.'
  ],
  date: new Date('2024-01-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '1 hour',
  tags: ['Appetizer', 'Vegetarian'],
  imgTag: 'Snacks'
},

{
  id: 'r3',
  name: 'Chole Bhature',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 550,
  description: 'Spicy chickpeas served with deep-fried bread.',
  ingredients: [
    { name: 'Chickpeas', amount: '1 cup, soaked overnight' },
    { name: 'Onion', amount: '1, chopped' },
    { name: 'Tomatoes', amount: '2, chopped' },
    { name: 'Chole Masala', amount: '2 tbsp' },
    { name: 'Flour', amount: '2 cups (for bhature)' },
    { name: 'Yogurt', amount: '1/2 cup' }
  ],
  type: 'veg',
  cuisine: 'Indian',
  steps: [
    'Cook chickpeas with onions, tomatoes, and spices until tender.',
    'Prepare dough for bhature and roll into circles.',
    'Deep fry bhature until golden and serve with chole.'
  ],
  date: new Date('2024-01-10'),
  isFavorite: false,
  serves: 4,
  timeTaken: '1.5 hours',
  tags: ['Main Course', 'Comfort Food'],
  imgTag: 'Lunch'
},

{
  id: 'r4',
  name: 'Biryani',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 650,
  description: 'A flavorful rice dish made with marinated meat and spices.',
  ingredients: [
    { name: 'Basmati Rice', amount: '2 cups' },
    { name: 'Chicken', amount: '500g, diced' },
    { name: 'Onion', amount: '2, sliced' },
    { name: 'Biryani Masala', amount: '2 tbsp' },
    { name: 'Mint Leaves', amount: '1/4 cup' },
    { name: 'Saffron', amount: 'a pinch' }
  ],
  type: 'non-veg',
  cuisine: 'Indian',
  steps: [
    'Marinate chicken with spices and yogurt for 1 hour.',
    'Fry onions until golden, add marinated chicken, and cook.',
    'Layer partially cooked rice with chicken, mint, and saffron.',
    'Cover and cook on low heat until rice is done.'
  ],
  date: new Date('2024-01-15'),
  isFavorite: false,
  serves: 6,
  timeTaken: '2 hours',
  tags: ['Rice', 'Dinner'],
  imgTag: 'Main Course'
},

{
  id: 'r5',
  name: 'Samosa',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'Deep-fried pastry filled with spiced potatoes and peas.',
  ingredients: [
    { name: 'Potatoes', amount: '2, boiled and mashed' },
    { name: 'Peas', amount: '1/2 cup' },
    { name: 'Spices', amount: '1 tsp (cumin, coriander)' },
    { name: 'Flour', amount: '2 cups' },
    { name: 'Oil', amount: 'for frying' }
  ],
  type: 'veg',
  cuisine: 'Indian',
  steps: [
    'Mix mashed potatoes, peas, and spices to make the filling.',
    'Prepare dough with flour and water, roll out, and cut into circles.',
    'Fill dough with potato mixture, fold, and seal edges.',
    'Deep fry until golden brown and serve with chutney.'
  ],
  date: new Date('2024-01-20'),
  isFavorite: false,
  serves: 4,
  timeTaken: '1 hour',
  tags: ['Snack', 'Appetizer'],
  imgTag: 'Snacks'
},
// Chinese Cuisine
{
  id: 'r6',
  name: 'Sweet and Sour Chicken',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'Crispy chicken pieces tossed in a tangy sweet and sour sauce.',
  ingredients: [
    { name: 'Chicken Breast', amount: '500g, diced' },
    { name: 'Bell Peppers', amount: '1 cup, diced' },
    { name: 'Pineapple Chunks', amount: '1 cup' },
    { name: 'Sweet and Sour Sauce', amount: '1/2 cup' },
    { name: 'Cornstarch', amount: '1/2 cup' },
    { name: 'Oil', amount: 'for frying' }
  ],
  type: 'non-veg',
  cuisine: 'Chinese',
  steps: [
    'Coat chicken in cornstarch and fry until golden.',
    'In a separate pan, stir-fry bell peppers and pineapple.',
    'Add fried chicken and sweet and sour sauce, stir to combine.',
    'Serve hot with steamed rice.'
  ],
  date: new Date('2024-02-01'),
  isFavorite: false,
  serves: 4,
  timeTaken: '45 mins',
  tags: ['Main Course', 'Dinner'],
  imgTag: 'Main Course'
},

{
  id: 'r7',
  name: 'Kung Pao Chicken',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 500,
  description: 'Spicy stir-fried chicken with peanuts and vegetables.',
  ingredients: [
    { name: 'Chicken', amount: '400g, diced' },
    { name: 'Peanuts', amount: '1/4 cup' },
    { name: 'Bell Peppers', amount: '1 cup, diced' },
    { name: 'Soy Sauce', amount: '2 tbsp' },
    { name: 'Chili Paste', amount: '1 tbsp' },
    { name: 'Ginger', amount: '1 inch, minced' }
  ],
  type: 'non-veg',
  cuisine: 'Chinese',
  steps: [
    'Heat oil in a wok, add ginger and sauté until fragrant.',
    'Add chicken and cook until browned.',
    'Stir in bell peppers, peanuts, soy sauce, and chili paste, cook for 5 minutes.',
    'Serve hot with rice.'
  ],
  date: new Date('2024-02-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Spicy', 'Main Course'],
  imgTag: 'Dinner'
},

{
  id: 'r8',
  name: 'Fried Rice',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 350,
  description: 'A classic stir-fried rice dish with vegetables and eggs.',
  ingredients: [
    { name: 'Cooked Rice', amount: '3 cups' },
    { name: 'Carrots', amount: '1/2 cup, diced' },
    { name: 'Green Peas', amount: '1/2 cup' },
    { name: 'Eggs', amount: '2, beaten' },
    { name: 'Soy Sauce', amount: '2 tbsp' },
    { name: 'Green Onions', amount: 'for garnish' }
  ],
  type: 'veg',
  cuisine: 'Chinese',
  steps: [
    'Heat oil in a wok and scramble the eggs, then set aside.',
    'Stir-fry carrots and peas until tender.',
    'Add rice and soy sauce, mix well, then stir in scrambled eggs.',
    'Garnish with green onions before serving.'
  ],
  date: new Date('2024-02-10'),
  isFavorite: false,
  serves: 4,
  timeTaken: '20 mins',
  tags: ['Quick', 'Main Course'],
  imgTag: 'Lunch'
},

{
  id: 'r9',
  name: 'Spring Rolls',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 200,
  description: 'Crispy rolls filled with seasoned vegetables.',
  ingredients: [
    { name: 'Spring Roll Wrappers', amount: '10' },
    { name: 'Cabbage', amount: '1 cup, shredded' },
    { name: 'Carrots', amount: '1/2 cup, shredded' },
    { name: 'Soy Sauce', amount: '1 tbsp' },
    { name: 'Oil', amount: 'for frying' }
  ],
  type: 'veg',
  cuisine: 'Chinese',
  steps: [
    'Mix cabbage, carrots, and soy sauce in a bowl.',
    'Place a spoonful of filling on each wrapper, roll tightly and seal edges.',
    'Deep fry until golden brown and serve with dipping sauce.'
  ],
  date: new Date('2024-02-15'),
  isFavorite: false,
  serves: 4,
  timeTaken: '45 mins',
  tags: ['Snack', 'Appetizer'],
  imgTag: 'Snacks'
},

{
  id: 'r10',
  name: 'Mapo Tofu',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'Spicy Sichuan dish made with tofu and ground meat.',
  ingredients: [
    { name: 'Tofu', amount: '300g, cubed' },
    { name: 'Ground Pork', amount: '200g' },
    { name: 'Sichuan Peppercorns', amount: '1 tsp' },
    { name: 'Doubanjiang (Chili Bean Paste)', amount: '1 tbsp' },
    { name: 'Green Onions', amount: 'for garnish' }
  ],
  type: 'non-veg',
  cuisine: 'Chinese',
  steps: [
    'Heat oil in a pan, add ground pork and cook until browned.',
    'Add doubanjiang and Sichuan peppercorns, stir-fry for 2 minutes.',
    'Gently add tofu and simmer for 5-10 minutes.',
    'Garnish with green onions and serve with rice.'
  ],
  date: new Date('2024-02-20'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Spicy', 'Main Course'],
  imgTag: 'Dinner'
},
// Italian Cuisine
{
  id: 'r11',
  name: 'Margherita Pizza',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.',
  ingredients: [
    { name: 'Pizza Dough', amount: '1 ball' },
    { name: 'Tomato Sauce', amount: '1/2 cup' },
    { name: 'Mozzarella Cheese', amount: '150g, sliced' },
    { name: 'Fresh Basil', amount: 'a handful' },
    { name: 'Olive Oil', amount: '1 tbsp' }
  ],
  type: 'veg',
  cuisine: 'Italian',
  steps: [
    'Preheat oven to 475°F (245°C).',
    'Roll out pizza dough on a floured surface.',
    'Spread tomato sauce on the base, top with mozzarella and basil.',
    'Drizzle with olive oil and bake for 10-12 minutes.',
    'Slice and serve hot.'
  ],
  date: new Date('2024-03-01'),
  isFavorite: false,
  serves: 2,
  timeTaken: '30 mins',
  tags: ['Main Course', 'Quick'],
  imgTag: 'Lunch'
},

{
  id: 'r12',
  name: 'Penne Arrabbiata',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'Pasta in a spicy tomato sauce with garlic and red chili flakes.',
  ingredients: [
    { name: 'Penne Pasta', amount: '300g' },
    { name: 'Tomato Sauce', amount: '2 cups' },
    { name: 'Garlic', amount: '3 cloves, minced' },
    { name: 'Red Chili Flakes', amount: '1 tsp' },
    { name: 'Olive Oil', amount: '2 tbsp' }
  ],
  type: 'veg',
  cuisine: 'Italian',
  steps: [
    'Cook penne according to package instructions.',
    'In a pan, heat olive oil, add garlic and sauté until fragrant.',
    'Add tomato sauce and chili flakes, simmer for 10 minutes.',
    'Toss cooked penne with the sauce and serve hot.'
  ],
  date: new Date('2024-03-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '25 mins',
  tags: ['Pasta', 'Spicy'],
  imgTag: 'Main Course'
},

{
  id: 'r13',
  name: 'Lasagna',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 600,
  description: 'Layers of pasta, meat sauce, and cheese baked to perfection.',
  ingredients: [
    { name: 'Lasagna Noodles', amount: '12 sheets' },
    { name: 'Ground Beef', amount: '500g' },
    { name: 'Tomato Sauce', amount: '3 cups' },
    { name: 'Ricotta Cheese', amount: '400g' },
    { name: 'Mozzarella Cheese', amount: '200g, shredded' },
    { name: 'Parmesan Cheese', amount: '100g, grated' }
  ],
  type: 'non-veg',
  cuisine: 'Italian',
  steps: [
    'Preheat oven to 375°F (190°C).',
    'Cook lasagna noodles according to package instructions.',
    'In a pan, cook ground beef until browned, add tomato sauce and simmer.',
    'Layer noodles, ricotta, meat sauce, and mozzarella in a baking dish.',
    'Top with Parmesan and bake for 30-35 minutes until bubbly.'
  ],
  date: new Date('2024-03-10'),
  isFavorite: false,
  serves: 6,
  timeTaken: '1 hour',
  tags: ['Main Course', 'Comfort Food'],
  imgTag: 'Dinner'
},

{
  id: 'r14',
  name: 'Risotto',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 350,
  description: 'Creamy rice dish cooked slowly with broth and Parmesan cheese.',
  ingredients: [
    { name: 'Arborio Rice', amount: '1 cup' },
    { name: 'Chicken Broth', amount: '4 cups' },
    { name: 'Onion', amount: '1, chopped' },
    { name: 'Parmesan Cheese', amount: '1/2 cup, grated' },
    { name: 'Butter', amount: '2 tbsp' }
  ],
  type: 'veg',
  cuisine: 'Italian',
  steps: [
    'In a saucepan, melt butter and sauté onion until translucent.',
    'Add Arborio rice and cook for 2 minutes.',
    'Gradually add broth, stirring continuously until rice is creamy.',
    'Stir in Parmesan cheese before serving.'
  ],
  date: new Date('2024-03-15'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Creamy', 'Side Dish'],
  imgTag: 'Dinner'
},

{
  id: 'r15',
  name: 'Tiramisu',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'A classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.',
  ingredients: [
    { name: 'Ladyfingers', amount: '24' },
    { name: 'Mascarpone Cheese', amount: '500g' },
    { name: 'Coffee', amount: '1 cup, brewed' },
    { name: 'Cocoa Powder', amount: 'for dusting' },
    { name: 'Sugar', amount: '1/2 cup' }
  ],
  type: 'veg',
  cuisine: 'Italian',
  steps: [
    'Dip ladyfingers in coffee and layer them in a dish.',
    'In a bowl, mix mascarpone cheese and sugar until smooth.',
    'Spread the cheese mixture over the ladyfingers.',
    'Chill for 4 hours and dust with cocoa powder before serving.'
  ],
  date: new Date('2024-03-20'),
  isFavorite: false,
  serves: 6,
  timeTaken: '4 hours + 30 mins prep',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Desserts'
},
// Mexican Cuisine
{
  id: 'r16',
  name: 'Tacos al Pastor',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'Corn tortillas filled with marinated pork, pineapple, onions, and cilantro.',
  ingredients: [
    { name: 'Corn Tortillas', amount: '8' },
    { name: 'Pork Shoulder', amount: '500g, thinly sliced' },
    { name: 'Pineapple', amount: '1/2 cup, diced' },
    { name: 'Onion', amount: '1, chopped' },
    { name: 'Cilantro', amount: 'a handful, chopped' }
  ],
  type: 'non-veg',
  cuisine: 'Mexican',
  steps: [
    'Marinate pork with spices and grill until cooked through.',
    'Warm tortillas on a skillet.',
    'Assemble tacos with pork, pineapple, onions, and cilantro.',
    'Serve with lime wedges.'
  ],
  date: new Date('2024-04-01'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Main Course', 'Quick'],
  imgTag: 'Lunch'
},

{
  id: 'r17',
  name: 'Guacamole',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 150,
  description: 'A creamy avocado dip mixed with lime juice, tomatoes, and cilantro.',
  ingredients: [
    { name: 'Avocados', amount: '2, ripe' },
    { name: 'Lime Juice', amount: '2 tbsp' },
    { name: 'Tomato', amount: '1, diced' },
    { name: 'Onion', amount: '1/4, chopped' },
    { name: 'Cilantro', amount: 'a handful, chopped' }
  ],
  type: 'veg',
  cuisine: 'Mexican',
  steps: [
    'Mash avocados in a bowl.',
    'Mix in lime juice, tomato, onion, and cilantro.',
    'Serve with tortilla chips.'
  ],
  date: new Date('2024-04-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '10 mins',
  tags: ['Appetizer', 'Quick'],
  imgTag: 'Snacks'
},

{
  id: 'r18',
  name: 'Chiles Rellenos',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'Stuffed poblano peppers with cheese, dipped in egg batter and fried.',
  ingredients: [
    { name: 'Poblano Peppers', amount: '4' },
    { name: 'Cheese', amount: '200g, shredded' },
    { name: 'Eggs', amount: '2' },
    { name: 'Flour', amount: '1/2 cup' },
    { name: 'Oil', amount: 'for frying' }
  ],
  type: 'veg',
  cuisine: 'Mexican',
  steps: [
    'Roast and peel poblano peppers.',
    'Stuff with cheese and set aside.',
    'Beat eggs and dip stuffed peppers in egg batter.',
    'Fry in hot oil until golden brown and serve.'
  ],
  date: new Date('2024-04-10'),
  isFavorite: false,
  serves: 4,
  timeTaken: '40 mins',
  tags: ['Main Course', 'Comfort Food'],
  imgTag: 'Dinner'
},

{
  id: 'r19',
  name: 'Enchiladas',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 350,
  description: 'Corn tortillas rolled and filled with chicken, topped with sauce and cheese.',
  ingredients: [
    { name: 'Corn Tortillas', amount: '10' },
    { name: 'Shredded Chicken', amount: '300g' },
    { name: 'Enchilada Sauce', amount: '2 cups' },
    { name: 'Cheese', amount: '150g, shredded' },
    { name: 'Onion', amount: '1, chopped' }
  ],
  type: 'non-veg',
  cuisine: 'Mexican',
  steps: [
    'Preheat oven to 350°F (175°C).',
    'Fill tortillas with shredded chicken and roll them up.',
    'Place in a baking dish, cover with enchilada sauce and cheese.',
    'Bake for 20-25 minutes until cheese is melted.'
  ],
  date: new Date('2024-04-15'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Main Course', 'Comfort Food'],
  imgTag: 'Dinner'
},

{
  id: 'r20',
  name: 'Churros',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'Fried dough pastry dusted with sugar and served with chocolate sauce.',
  ingredients: [
    { name: 'Flour', amount: '1 cup' },
    { name: 'Water', amount: '1 cup' },
    { name: 'Sugar', amount: '1/2 cup' },
    { name: 'Cinnamon', amount: '1 tsp' },
    { name: 'Oil', amount: 'for frying' }
  ],
  type: 'veg',
  cuisine: 'Mexican',
  steps: [
    'In a saucepan, combine water and sugar, bring to a boil.',
    'Stir in flour and mix until a dough forms.',
    'Pipe dough into hot oil and fry until golden brown.',
    'Dust with sugar and serve with chocolate sauce.'
  ],
  date: new Date('2024-04-20'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Desserts'
},
// Thai Cuisine
{
  id: 'r21',
  name: 'Pad Thai',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'Stir-fried rice noodles with shrimp, tofu, and a tangy sauce.',
  ingredients: [
    { name: 'Rice Noodles', amount: '200g' },
    { name: 'Shrimp', amount: '200g' },
    { name: 'Tofu', amount: '100g, cubed' },
    { name: 'Eggs', amount: '2' },
    { name: 'Bean Sprouts', amount: '1 cup' },
    { name: 'Peanuts', amount: '2 tbsp, crushed' },
    { name: 'Pad Thai Sauce', amount: '3 tbsp' }
  ],
  type: 'non-veg',
  cuisine: 'Thai',
  steps: [
    'Soak rice noodles in warm water for 30 minutes, then drain.',
    'Heat oil in a pan and scramble eggs, then set aside.',
    'Stir-fry shrimp and tofu until cooked, then add noodles and sauce.',
    'Mix in bean sprouts and cooked eggs, top with peanuts and serve.'
  ],
  date: new Date('2024-05-01'),
  isFavorite: false,
  serves: 2,
  timeTaken: '20 mins',
  tags: ['Noodles', 'Quick'],
  imgTag: 'Main Course'
},

{
  id: 'r22',
  name: 'Tom Yum Soup',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 150,
  description: 'Spicy and sour soup with shrimp and mushrooms.',
  ingredients: [
    { name: 'Shrimp', amount: '200g' },
    { name: 'Mushrooms', amount: '1 cup, sliced' },
    { name: 'Lemongrass', amount: '2 stalks, chopped' },
    { name: 'Lime Juice', amount: '2 tbsp' },
    { name: 'Fish Sauce', amount: '1 tbsp' },
    { name: 'Chili Paste', amount: '1 tbsp' }
  ],
  type: 'non-veg',
  cuisine: 'Thai',
  steps: [
    'Boil water and add lemongrass and mushrooms.',
    'Add shrimp and cook until pink.',
    'Stir in lime juice, fish sauce, and chili paste.',
    'Serve hot, garnished with cilantro.'
  ],
  date: new Date('2024-05-05'),
  isFavorite: false,
  serves: 2,
  timeTaken: '15 mins',
  tags: ['Soup', 'Spicy'],
  imgTag: 'Appetizer'
},

{
  id: 'r23',
  name: 'Green Curry',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 350,
  description: 'A fragrant curry made with green curry paste, coconut milk, and vegetables.',
  ingredients: [
    { name: 'Coconut Milk', amount: '400ml' },
    { name: 'Green Curry Paste', amount: '2 tbsp' },
    { name: 'Chicken', amount: '300g, sliced' },
    { name: 'Bell Peppers', amount: '1 cup, sliced' },
    { name: 'Basil Leaves', amount: 'a handful' }
  ],
  type: 'non-veg',
  cuisine: 'Thai',
  steps: [
    'In a pot, heat curry paste and coconut milk.',
    'Add chicken and cook until no longer pink.',
    'Stir in bell peppers and basil, simmer for 10 minutes.',
    'Serve with rice.'
  ],
  date: new Date('2024-05-10'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Curry', 'Spicy'],
  imgTag: 'Dinner'
},

{
  id: 'r24',
  name: 'Som Tum (Papaya Salad)',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 200,
  description: 'A refreshing salad made from green papaya, lime, and peanuts.',
  ingredients: [
    { name: 'Green Papaya', amount: '1 cup, shredded' },
    { name: 'Lime Juice', amount: '2 tbsp' },
    { name: 'Fish Sauce', amount: '1 tbsp' },
    { name: 'Peanuts', amount: '2 tbsp, crushed' },
    { name: 'Cherry Tomatoes', amount: '1/2 cup, halved' }
  ],
  type: 'veg',
  cuisine: 'Thai',
  steps: [
    'In a bowl, mix shredded papaya, lime juice, fish sauce, and tomatoes.',
    'Top with crushed peanuts and serve cold.'
  ],
  date: new Date('2024-05-15'),
  isFavorite: false,
  serves: 2,
  timeTaken: '10 mins',
  tags: ['Salad', 'Healthy'],
  imgTag: 'Snacks'
},

{
  id: 'r25',
  name: 'Mango Sticky Rice',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'Sweet sticky rice served with ripe mango and coconut sauce.',
  ingredients: [
    { name: 'Sticky Rice', amount: '1 cup' },
    { name: 'Coconut Milk', amount: '1/2 cup' },
    { name: 'Mango', amount: '2, sliced' },
    { name: 'Sugar', amount: '2 tbsp' },
    { name: 'Salt', amount: 'a pinch' }
  ],
  type: 'veg',
  cuisine: 'Thai',
  steps: [
    'Cook sticky rice according to package instructions.',
    'In a saucepan, heat coconut milk, sugar, and salt until dissolved.',
    'Serve sticky rice topped with mango and drizzled with coconut sauce.'
  ],
  date: new Date('2024-05-20'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Desserts'
},
// Japanese Cuisine
{
  id: 'r26',
  name: 'Sushi Rolls',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'Rice rolls filled with fresh fish and vegetables, wrapped in seaweed.',
  ingredients: [
    { name: 'Sushi Rice', amount: '2 cups' },
    { name: 'Nori (Seaweed)', amount: '5 sheets' },
    { name: 'Fresh Fish', amount: '200g, sliced' },
    { name: 'Cucumber', amount: '1, julienned' },
    { name: 'Avocado', amount: '1, sliced' }
  ],
  type: 'non-veg',
  cuisine: 'Japanese',
  steps: [
    'Cook sushi rice and let it cool.',
    'Place nori on a bamboo mat and spread a layer of rice.',
    'Add fish, cucumber, and avocado on top.',
    'Roll tightly and slice into bite-sized pieces.'
  ],
  date: new Date('2024-06-01'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Appetizer', 'Seafood'],
  imgTag: 'Lunch'
},

{
  id: 'r27',
  name: 'Ramen',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'Noodles in a flavorful broth topped with pork, eggs, and green onions.',
  ingredients: [
    { name: 'Ramen Noodles', amount: '200g' },
    { name: 'Pork Belly', amount: '150g, sliced' },
    { name: 'Soft-Boiled Eggs', amount: '2' },
    { name: 'Green Onions', amount: '2, chopped' },
    { name: 'Soy Sauce', amount: '2 tbsp' }
  ],
  type: 'non-veg',
  cuisine: 'Japanese',
  steps: [
    'Cook ramen noodles according to package instructions.',
    'In a pot, simmer pork in broth with soy sauce.',
    'Serve noodles in a bowl, topped with pork, egg, and green onions.'
  ],
  date: new Date('2024-06-05'),
  isFavorite: false,
  serves: 2,
  timeTaken: '25 mins',
  tags: ['Noodles', 'Soup'],
  imgTag: 'Dinner'
},

{
  id: 'r28',
  name: 'Teriyaki Chicken',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 350,
  description: 'Grilled chicken glazed with a sweet teriyaki sauce, served with rice.',
  ingredients: [
    { name: 'Chicken Breast', amount: '400g' },
    { name: 'Teriyaki Sauce', amount: '1/2 cup' },
    { name: 'Rice', amount: '2 cups, cooked' },
    { name: 'Sesame Seeds', amount: '1 tbsp' },
    { name: 'Broccoli', amount: '1 cup, steamed' }
  ],
  type: 'non-veg',
  cuisine: 'Japanese',
  steps: [
    'Marinate chicken in teriyaki sauce for 30 minutes.',
    'Grill chicken until cooked through and glaze with additional sauce.',
    'Serve over rice with steamed broccoli and sprinkle sesame seeds on top.'
  ],
  date: new Date('2024-06-10'),
  isFavorite: false,
  serves: 4,
  timeTaken: '45 mins',
  tags: ['Main Course', 'Grilled'],
  imgTag: 'Dinner'
},

{
  id: 'r29',
  name: 'Miso Soup',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 70,
  description: 'A comforting soup made with miso paste, tofu, and seaweed.',
  ingredients: [
    { name: 'Miso Paste', amount: '3 tbsp' },
    { name: 'Tofu', amount: '100g, cubed' },
    { name: 'Seaweed', amount: '1 sheet' },
    { name: 'Green Onions', amount: '2, chopped' },
    { name: 'Water', amount: '4 cups' }
  ],
  type: 'veg',
  cuisine: 'Japanese',
  steps: [
    'In a pot, heat water and add miso paste, stirring until dissolved.',
    'Add tofu and seaweed, simmer for 5 minutes.',
    'Serve hot, garnished with green onions.'
  ],
  date: new Date('2024-06-15'),
  isFavorite: false,
  serves: 2,
  timeTaken: '10 mins',
  tags: ['Soup', 'Healthy'],
  imgTag: 'Appetizer'
},

{
  id: 'r30',
  name: 'Matcha Green Tea Cake',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 350,
  description: 'A light and fluffy cake infused with matcha green tea powder.',
  ingredients: [
    { name: 'All-Purpose Flour', amount: '1 cup' },
    { name: 'Matcha Powder', amount: '2 tbsp' },
    { name: 'Sugar', amount: '1 cup' },
    { name: 'Eggs', amount: '2' },
    { name: 'Butter', amount: '1/2 cup, melted' }
  ],
  type: 'veg',
  cuisine: 'Japanese',
  steps: [
    'Preheat oven to 350°F (175°C).',
    'In a bowl, mix flour, matcha powder, and sugar.',
    'In another bowl, beat eggs and add melted butter.',
    'Combine both mixtures and pour into a cake pan.',
    'Bake for 25-30 minutes until golden brown.'
  ],
  date: new Date('2024-06-20'),
  isFavorite: false,
  serves: 8,
  timeTaken: '40 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Desserts'
},
// American Cuisine
{
  id: 'r31',
  name: 'Cheeseburger',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 500,
  description: 'Juicy beef patty topped with cheese, lettuce, tomato, and pickles, served on a bun.',
  ingredients: [
    { name: 'Ground Beef', amount: '250g' },
    { name: 'Cheddar Cheese', amount: '1 slice' },
    { name: 'Burger Bun', amount: '1' },
    { name: 'Lettuce', amount: '2 leaves' },
    { name: 'Tomato', amount: '1 slice' },
    { name: 'Pickles', amount: '2 slices' },
    { name: 'Ketchup', amount: '1 tbsp' },
    { name: 'Mustard', amount: '1 tsp' }
  ],
  type: 'non-veg',
  cuisine: 'American',
  steps: [
    'Form ground beef into a patty and season with salt and pepper.',
    'Grill or fry the patty to desired doneness.',
    'Top with cheese and let it melt.',
    'Assemble the burger with lettuce, tomato, pickles, ketchup, and mustard.'
  ],
  date: new Date('2024-07-01'),
  isFavorite: false,
  serves: 1,
  timeTaken: '20 mins',
  tags: ['Main Course', 'Grilled'],
  imgTag: 'Lunch'
},

{
  id: 'r32',
  name: 'Buffalo Wings',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'Spicy chicken wings tossed in buffalo sauce, served with celery and blue cheese dressing.',
  ingredients: [
    { name: 'Chicken Wings', amount: '500g' },
    { name: 'Buffalo Sauce', amount: '1/2 cup' },
    { name: 'Celery Sticks', amount: '1 cup' },
    { name: 'Blue Cheese Dressing', amount: '1/4 cup' }
  ],
  type: 'non-veg',
  cuisine: 'American',
  steps: [
    'Preheat oven to 400°F (200°C).',
    'Bake chicken wings for 30-40 minutes until crispy.',
    'Toss wings in buffalo sauce before serving.',
    'Serve with celery sticks and blue cheese dressing.'
  ],
  date: new Date('2024-07-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '50 mins',
  tags: ['Appetizer', 'Spicy'],
  imgTag: 'Snacks'
},

{
  id: 'r33',
  name: 'Mac and Cheese',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 600,
  description: 'Creamy macaroni pasta mixed with melted cheese.',
  ingredients: [
    { name: 'Macaroni Pasta', amount: '200g' },
    { name: 'Cheddar Cheese', amount: '2 cups, shredded' },
    { name: 'Milk', amount: '1 cup' },
    { name: 'Butter', amount: '2 tbsp' },
    { name: 'Flour', amount: '2 tbsp' },
    { name: 'Breadcrumbs', amount: '1/2 cup' }
  ],
  type: 'veg',
  cuisine: 'American',
  steps: [
    'Cook macaroni according to package instructions.',
    'In a pot, melt butter, stir in flour, and gradually add milk.',
    'Add cheese and stir until melted.',
    'Mix pasta with cheese sauce and transfer to a baking dish.',
    'Top with breadcrumbs and bake at 350°F (175°C) for 20 minutes.'
  ],
  date: new Date('2024-07-10'),
  isFavorite: false,
  serves: 4,
  timeTaken: '40 mins',
  tags: ['Main Course', 'Comfort Food'],
  imgTag: 'Dinner'
},

{
  id: 'r34',
  name: 'Apple Pie',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'Classic American dessert made with spiced apples and a flaky crust.',
  ingredients: [
    { name: 'Apples', amount: '6, sliced' },
    { name: 'Sugar', amount: '3/4 cup' },
    { name: 'Cinnamon', amount: '1 tsp' },
    { name: 'Pie Crust', amount: '1 (store-bought or homemade)' },
    { name: 'Butter', amount: '2 tbsp, diced' }
  ],
  type: 'veg',
  cuisine: 'American',
  steps: [
    'Preheat oven to 425°F (220°C).',
    'In a bowl, mix sliced apples with sugar and cinnamon.',
    'Pour apple mixture into pie crust and dot with butter.',
    'Cover with another pie crust, seal edges, and cut slits for steam.',
    'Bake for 45-50 minutes until golden brown.'
  ],
  date: new Date('2024-07-15'),
  isFavorite: false,
  serves: 8,
  timeTaken: '60 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Desserts'
},

{
  id: 'r35',
  name: 'Grilled Cheese Sandwich',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'Toasted sandwich filled with melted cheese, perfect for a quick meal.',
  ingredients: [
    { name: 'Bread', amount: '2 slices' },
    { name: 'Cheddar Cheese', amount: '2 slices' },
    { name: 'Butter', amount: '1 tbsp' }
  ],
  type: 'veg',
  cuisine: 'American',
  steps: [
    'Spread butter on one side of each slice of bread.',
    'Place cheese between the slices, buttered side out.',
    'Cook on a skillet over medium heat until golden brown on both sides and cheese is melted.'
  ],
  date: new Date('2024-07-20'),
  isFavorite: false,
  serves: 1,
  timeTaken: '10 mins',
  tags: ['Snack', 'Quick'],
  imgTag: 'Lunch'
},
// French Cuisine
{
  id: 'r36',
  name: 'Croque Monsieur',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'A classic French sandwich made with ham and cheese, topped with béchamel sauce.',
  ingredients: [
    { name: 'Bread', amount: '2 slices' },
    { name: 'Ham', amount: '2 slices' },
    { name: 'Gruyère Cheese', amount: '1 slice' },
    { name: 'Butter', amount: '1 tbsp' },
    { name: 'Béchamel Sauce', amount: '1/4 cup' }
  ],
  type: 'non-veg',
  cuisine: 'French',
  steps: [
    'Butter one side of each slice of bread.',
    'Layer ham and cheese between the unbuttered sides of bread.',
    'Toast the sandwich in a skillet until golden brown.',
    'Top with béchamel sauce and grill until cheese is melted.'
  ],
  date: new Date('2024-08-01'),
  isFavorite: false,
  serves: 1,
  timeTaken: '20 mins',
  tags: ['Main Course', 'Sandwich'],
  imgTag: 'Lunch'
},

{
  id: 'r37',
  name: 'Ratatouille',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 150,
  description: 'A vegetable medley featuring zucchini, eggplant, and bell peppers, simmered in tomato sauce.',
  ingredients: [
    { name: 'Zucchini', amount: '1, sliced' },
    { name: 'Eggplant', amount: '1, diced' },
    { name: 'Bell Peppers', amount: '1, diced' },
    { name: 'Tomato Sauce', amount: '1 cup' },
    { name: 'Olive Oil', amount: '2 tbsp' },
    { name: 'Herbs de Provence', amount: '1 tsp' }
  ],
  type: 'veg',
  cuisine: 'French',
  steps: [
    'Heat olive oil in a pan and sauté zucchini and eggplant until soft.',
    'Add bell peppers and cook for another 5 minutes.',
    'Stir in tomato sauce and herbs, simmer for 20 minutes.',
    'Serve hot as a side or main dish.'
  ],
  date: new Date('2024-08-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Vegetarian', 'Healthy'],
  imgTag: 'Dinner'
},

{
  id: 'r38',
  name: 'Crème Brûlée',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'A rich custard base topped with a layer of hardened caramelized sugar.',
  ingredients: [
    { name: 'Heavy Cream', amount: '2 cups' },
    { name: 'Vanilla Bean', amount: '1, split' },
    { name: 'Egg Yolks', amount: '5' },
    { name: 'Sugar', amount: '1/2 cup' },
    { name: 'Brown Sugar', amount: 'for topping' }
  ],
  type: 'veg',
  cuisine: 'French',
  steps: [
    'Preheat oven to 325°F (160°C).',
    'In a saucepan, heat cream and vanilla until simmering.',
    'Whisk together egg yolks and sugar, then slowly add cream mixture.',
    'Pour into ramekins and bake in a water bath for 30-40 minutes.',
    'Chill, then sprinkle with brown sugar and caramelize with a torch.'
  ],
  date: new Date('2024-08-10'),
  isFavorite: false,
  serves: 4,
  timeTaken: '90 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Desserts'
},

{
  id: 'r39',
  name: 'Boeuf Bourguignon',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 550,
  description: 'A hearty beef stew slow-cooked in red wine with mushrooms and onions.',
  ingredients: [
    { name: 'Beef Chuck', amount: '500g, cut into chunks' },
    { name: 'Red Wine', amount: '2 cups' },
    { name: 'Mushrooms', amount: '1 cup, sliced' },
    { name: 'Onion', amount: '1, chopped' },
    { name: 'Garlic', amount: '2 cloves, minced' },
    { name: 'Thyme', amount: '1 tsp' }
  ],
  type: 'non-veg',
  cuisine: 'French',
  steps: [
    'In a pot, brown beef chunks in oil, then set aside.',
    'Sauté onions and garlic, then return beef to the pot.',
    'Add red wine, thyme, and simmer for 1.5 hours until tender.',
    'Stir in mushrooms and cook for an additional 30 minutes.'
  ],
  date: new Date('2024-08-15'),
  isFavorite: false,
  serves: 4,
  timeTaken: '150 mins',
  tags: ['Main Course', 'Hearty'],
  imgTag: 'Dinner'
},

{
  id: 'r40',
  name: 'Tarte Tatin',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 280,
  description: 'An upside-down caramelized apple tart made with buttery pastry.',
  ingredients: [
    { name: 'Apples', amount: '4, peeled and sliced' },
    { name: 'Butter', amount: '1/2 cup' },
    { name: 'Sugar', amount: '1/2 cup' },
    { name: 'Pastry Dough', amount: '1 sheet' }
  ],
  type: 'veg',
  cuisine: 'French',
  steps: [
    'Preheat oven to 375°F (190°C).',
    'Melt butter and sugar in a skillet until caramelized, add apples.',
    'Cover with pastry dough and bake for 25-30 minutes.',
    'Let cool, then flip onto a plate to serve.'
  ],
  date: new Date('2024-08-20'),
  isFavorite: false,
  serves: 6,
  timeTaken: '60 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Desserts'
},
// Mediterranean Cuisine
{
  id: 'r41',
  name: 'Falafel',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'Crispy chickpea balls seasoned with herbs and spices, served with tahini sauce.',
  ingredients: [
    { name: 'Chickpeas', amount: '1 cup, soaked overnight' },
    { name: 'Onion', amount: '1, chopped' },
    { name: 'Garlic', amount: '2 cloves' },
    { name: 'Cilantro', amount: '1/2 cup, chopped' },
    { name: 'Cumin', amount: '1 tsp' },
    { name: 'Flour', amount: '2 tbsp' },
    { name: 'Oil', amount: 'for frying' }
  ],
  type: 'veg',
  cuisine: 'Mediterranean',
  steps: [
    'Drain and rinse chickpeas, then blend with onion, garlic, cilantro, and spices.',
    'Form into small balls and refrigerate for 30 minutes.',
    'Heat oil in a pan and fry falafel until golden brown on all sides.',
    'Serve with tahini sauce and pita bread.'
  ],
  date: new Date('2024-09-01'),
  isFavorite: false,
  serves: 4,
  timeTaken: '60 mins',
  tags: ['Appetizer', 'Vegetarian'],
  imgTag: 'Snacks'
},

{
  id: 'r42',
  name: 'Greek Salad',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 200,
  description: 'A fresh salad made with tomatoes, cucumbers, olives, feta cheese, and olive oil.',
  ingredients: [
    { name: 'Tomatoes', amount: '2, chopped' },
    { name: 'Cucumber', amount: '1, sliced' },
    { name: 'Red Onion', amount: '1/2, sliced' },
    { name: 'Kalamata Olives', amount: '1/4 cup' },
    { name: 'Feta Cheese', amount: '100g, crumbled' },
    { name: 'Olive Oil', amount: '2 tbsp' },
    { name: 'Oregano', amount: '1 tsp' }
  ],
  type: 'veg',
  cuisine: 'Mediterranean',
  steps: [
    'In a bowl, combine tomatoes, cucumber, onion, and olives.',
    'Drizzle with olive oil and sprinkle with oregano.',
    'Toss gently and top with feta cheese before serving.'
  ],
  date: new Date('2024-09-05'),
  isFavorite: false,
  serves: 2,
  timeTaken: '15 mins',
  tags: ['Salad', 'Healthy'],
  imgTag: 'Snacks'
},

{
  id: 'r43',
  name: 'Hummus',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'A creamy dip made from blended chickpeas, tahini, lemon juice, and garlic.',
  ingredients: [
    { name: 'Chickpeas', amount: '1 can, drained' },
    { name: 'Tahini', amount: '1/4 cup' },
    { name: 'Lemon Juice', amount: '2 tbsp' },
    { name: 'Garlic', amount: '1 clove' },
    { name: 'Olive Oil', amount: '2 tbsp' },
    { name: 'Cumin', amount: '1/2 tsp' }
  ],
  type: 'veg',
  cuisine: 'Mediterranean',
  steps: [
    'In a food processor, blend chickpeas, tahini, lemon juice, garlic, and cumin.',
    'Drizzle in olive oil while blending until smooth.',
    'Serve with pita bread or fresh veggies.'
  ],
  date: new Date('2024-09-10'),
  isFavorite: false,
  serves: 6,
  timeTaken: '10 mins',
  tags: ['Dip', 'Vegetarian'],
  imgTag: 'Snacks'
},

{
  id: 'r44',
  name: 'Shakshuka',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'Eggs poached in a spicy tomato sauce with bell peppers and onions.',
  ingredients: [
    { name: 'Eggs', amount: '4' },
    { name: 'Tomatoes', amount: '2, diced' },
    { name: 'Bell Pepper', amount: '1, chopped' },
    { name: 'Onion', amount: '1, chopped' },
    { name: 'Paprika', amount: '1 tsp' },
    { name: 'Cumin', amount: '1/2 tsp' },
    { name: 'Olive Oil', amount: '2 tbsp' }
  ],
  type: 'veg',
  cuisine: 'Mediterranean',
  steps: [
    'Heat olive oil in a skillet and sauté onion and bell pepper until soft.',
    'Add tomatoes and spices, cook until thickened.',
    'Make wells in the sauce and crack eggs into each well.',
    'Cover and cook until eggs are set. Serve with bread.'
  ],
  date: new Date('2024-09-15'),
  isFavorite: false,
  serves: 2,
  timeTaken: '25 mins',
  tags: ['Breakfast', 'Vegetarian'],
  imgTag: 'Breakfast'
},

{
  id: 'r45',
  name: 'Moussaka',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 500,
  description: 'A baked dish with layers of eggplant, minced meat, and béchamel sauce.',
  ingredients: [
    { name: 'Eggplant', amount: '2, sliced' },
    { name: 'Ground Beef', amount: '500g' },
    { name: 'Tomato Sauce', amount: '1 cup' },
    { name: 'Onion', amount: '1, chopped' },
    { name: 'Béchamel Sauce', amount: '2 cups' },
    { name: 'Olive Oil', amount: '2 tbsp' }
  ],
  type: 'non-veg',
  cuisine: 'Mediterranean',
  steps: [
    'Preheat oven to 350°F (175°C).',
    'Brush eggplant slices with olive oil and bake until tender.',
    'In a pan, sauté onion, add ground beef and cook until browned.',
    'Layer eggplant, meat sauce, and béchamel in a baking dish.',
    'Bake for 45 minutes until golden on top.'
  ],
  date: new Date('2024-09-20'),
  isFavorite: false,
  serves: 6,
  timeTaken: '120 mins',
  tags: ['Main Course', 'Hearty'],
  imgTag: 'Dinner'
},
// Middle Eastern Cuisine
{
  id: 'r46',
  name: 'Tabbouleh',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 180,
  description: 'A refreshing salad made with parsley, bulgur, tomatoes, and a lemon-olive oil dressing.',
  ingredients: [
    { name: 'Bulgur Wheat', amount: '1/2 cup' },
    { name: 'Parsley', amount: '1 cup, finely chopped' },
    { name: 'Tomatoes', amount: '2, diced' },
    { name: 'Onion', amount: '1/4, finely chopped' },
    { name: 'Olive Oil', amount: '2 tbsp' },
    { name: 'Lemon Juice', amount: '2 tbsp' },
    { name: 'Mint', amount: '1/4 cup, chopped' }
  ],
  type: 'veg',
  cuisine: 'Middle Eastern',
  steps: [
    'Soak bulgur in water for 20 minutes, then drain.',
    'In a bowl, combine bulgur, parsley, tomatoes, onion, and mint.',
    'Drizzle with olive oil and lemon juice, then toss to combine.',
    'Chill before serving.'
  ],
  date: new Date('2024-09-25'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Salad', 'Healthy'],
  imgTag: 'Snacks'
},

{
  id: 'r47',
  name: 'Shawarma',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 500,
  description: 'Marinated meat wrapped in pita bread, topped with vegetables and tahini sauce.',
  ingredients: [
    { name: 'Chicken Thighs', amount: '500g, sliced' },
    { name: 'Yogurt', amount: '1/2 cup' },
    { name: 'Garlic', amount: '2 cloves, minced' },
    { name: 'Cumin', amount: '1 tsp' },
    { name: 'Paprika', amount: '1 tsp' },
    { name: 'Pita Bread', amount: '4' },
    { name: 'Tahini Sauce', amount: 'for drizzling' }
  ],
  type: 'non-veg',
  cuisine: 'Middle Eastern',
  steps: [
    'In a bowl, mix yogurt, garlic, cumin, and paprika. Marinate chicken for 1 hour.',
    'Grill or pan-fry chicken until cooked through.',
    'Serve in pita bread with vegetables and drizzle with tahini sauce.'
  ],
  date: new Date('2024-09-30'),
  isFavorite: false,
  serves: 4,
  timeTaken: '60 mins',
  tags: ['Main Course', 'Hearty'],
  imgTag: 'Dinner'
},

{
  id: 'r48',
  name: 'Fattoush',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 150,
  description: 'A salad made with mixed greens, radishes, cucumbers, and toasted pita bread.',
  ingredients: [
    { name: 'Mixed Greens', amount: '2 cups' },
    { name: 'Tomatoes', amount: '2, chopped' },
    { name: 'Cucumbers', amount: '1, sliced' },
    { name: 'Radishes', amount: '4, sliced' },
    { name: 'Pita Bread', amount: '1, toasted and broken' },
    { name: 'Sumac', amount: '1 tsp' },
    { name: 'Olive Oil', amount: '3 tbsp' }
  ],
  type: 'veg',
  cuisine: 'Middle Eastern',
  steps: [
    'In a bowl, combine mixed greens, tomatoes, cucumbers, radishes, and toasted pita.',
    'Drizzle with olive oil and sprinkle with sumac before tossing.'
  ],
  date: new Date('2024-10-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '15 mins',
  tags: ['Salad', 'Quick'],
  imgTag: 'Snacks'
},

{
  id: 'r49',
  name: 'Baba Ganoush',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'A creamy eggplant dip blended with tahini, garlic, and lemon juice.',
  ingredients: [
    { name: 'Eggplant', amount: '1 large' },
    { name: 'Tahini', amount: '1/4 cup' },
    { name: 'Lemon Juice', amount: '2 tbsp' },
    { name: 'Garlic', amount: '1 clove' },
    { name: 'Olive Oil', amount: '2 tbsp' },
    { name: 'Salt', amount: 'to taste' }
  ],
  type: 'veg',
  cuisine: 'Middle Eastern',
  steps: [
    'Preheat oven to 400°F (200°C).',
    'Prick eggplant and roast for 30-40 minutes until soft.',
    'Scoop out the flesh and blend with tahini, lemon juice, garlic, and salt.',
    'Drizzle with olive oil before serving.'
  ],
  date: new Date('2024-10-10'),
  isFavorite: false,
  serves: 4,
  timeTaken: '50 mins',
  tags: ['Dip', 'Vegetarian'],
  imgTag: 'Snacks'
},

{
  id: 'r50',
  name: 'Kebabs',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'Skewered and grilled meat, typically served with pita and veggies.',
  ingredients: [
    { name: 'Ground Lamb or Beef', amount: '500g' },
    { name: 'Onion', amount: '1, grated' },
    { name: 'Garlic', amount: '2 cloves, minced' },
    { name: 'Cumin', amount: '1 tsp' },
    { name: 'Paprika', amount: '1 tsp' },
    { name: 'Salt', amount: 'to taste' },
    { name: 'Pepper', amount: 'to taste' }
  ],
  type: 'non-veg',
  cuisine: 'Middle Eastern',
  steps: [
    'In a bowl, mix ground meat with onion, garlic, and spices.',
    'Form into kebabs and skewer them.',
    'Grill on medium heat until cooked through, about 10-12 minutes.',
    'Serve with pita bread and salad.'
  ],
  date: new Date('2024-10-15'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Main Course', 'Hearty'],
  imgTag: 'Dinner'
},
// Spanish Cuisine
{
  id: 'r51',
  name: 'Paella',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 600,
  description: 'A classic Spanish rice dish cooked with saffron, chicken, and seafood.',
  ingredients: [
    { name: 'Rice', amount: '2 cups' },
    { name: 'Chicken', amount: '300g, cut into pieces' },
    { name: 'Shrimp', amount: '200g' },
    { name: 'Bell Pepper', amount: '1, chopped' },
    { name: 'Saffron', amount: '1/2 tsp' },
    { name: 'Chicken Broth', amount: '4 cups' },
    { name: 'Garlic', amount: '3 cloves, minced' }
  ],
  type: 'non-veg',
  cuisine: 'Spanish',
  steps: [
    'In a large pan, sauté chicken pieces until browned.',
    'Add garlic and bell pepper, cook for a few minutes.',
    'Stir in rice and saffron, then add chicken broth.',
    'Simmer until rice is cooked, adding shrimp in the last few minutes.',
    'Serve warm.'
  ],
  date: new Date('2024-10-20'),
  isFavorite: false,
  serves: 4,
  timeTaken: '45 mins',
  tags: ['Main Course', 'Hearty'],
  imgTag: 'Dinner'
},

{
  id: 'r52',
  name: 'Gazpacho',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 100,
  description: 'A cold soup made from blended tomatoes, cucumbers, and peppers.',
  ingredients: [
    { name: 'Tomatoes', amount: '4, ripe' },
    { name: 'Cucumber', amount: '1, peeled and chopped' },
    { name: 'Red Bell Pepper', amount: '1, chopped' },
    { name: 'Onion', amount: '1/2, chopped' },
    { name: 'Garlic', amount: '1 clove' },
    { name: 'Olive Oil', amount: '3 tbsp' },
    { name: 'Vinegar', amount: '2 tbsp' }
  ],
  type: 'veg',
  cuisine: 'Spanish',
  steps: [
    'Blend all ingredients together until smooth.',
    'Chill in the refrigerator for at least 2 hours before serving.',
    'Serve with a drizzle of olive oil on top.'
  ],
  date: new Date('2024-10-25'),
  isFavorite: false,
  serves: 4,
  timeTaken: '15 mins',
  tags: ['Appetizer', 'Refreshing'],
  imgTag: 'Snacks'
},

{
  id: 'r53',
  name: 'Churros',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'Fried dough pastries sprinkled with sugar, often served with chocolate sauce.',
  ingredients: [
    { name: 'Flour', amount: '1 cup' },
    { name: 'Water', amount: '1 cup' },
    { name: 'Butter', amount: '1/2 cup' },
    { name: 'Sugar', amount: '1/4 cup' },
    { name: 'Salt', amount: '1/4 tsp' },
    { name: 'Egg', amount: '1' },
    { name: 'Oil', amount: 'for frying' }
  ],
  type: 'veg',
  cuisine: 'Spanish',
  steps: [
    'In a saucepan, heat water, butter, sugar, and salt until boiling.',
    'Remove from heat and stir in flour until smooth.',
    'Allow to cool, then add the egg and mix until combined.',
    'Pipe the dough into hot oil and fry until golden brown.',
    'Sprinkle with sugar and serve with chocolate sauce.'
  ],
  date: new Date('2024-11-01'),
  isFavorite: false,
  serves: 4,
  timeTaken: '40 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Snacks'
},

{
  id: 'r54',
  name: 'Patatas Bravas',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 250,
  description: 'Fried potatoes served with a spicy tomato sauce.',
  ingredients: [
    { name: 'Potatoes', amount: '4, diced' },
    { name: 'Olive Oil', amount: 'for frying' },
    { name: 'Tomato Sauce', amount: '1 cup' },
    { name: 'Garlic Powder', amount: '1 tsp' },
    { name: 'Paprika', amount: '1 tsp' },
    { name: 'Chili Powder', amount: '1/2 tsp' }
  ],
  type: 'veg',
  cuisine: 'Spanish',
  steps: [
    'Heat oil in a pan and fry diced potatoes until golden and crispy.',
    'In a separate pan, heat tomato sauce with garlic powder, paprika, and chili powder.',
    'Serve the fried potatoes drizzled with the spicy sauce.'
  ],
  date: new Date('2024-11-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '30 mins',
  tags: ['Appetizer', 'Snack'],
  imgTag: 'Snacks'
},

{
  id: 'r55',
  name: 'Flan',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 220,
  description: 'A creamy caramel custard dessert that is popular in Spain.',
  ingredients: [
    { name: 'Milk', amount: '2 cups' },
    { name: 'Eggs', amount: '3' },
    { name: 'Sugar', amount: '1/2 cup' },
    { name: 'Vanilla Extract', amount: '1 tsp' },
    { name: 'Caramel Sauce', amount: 'for drizzling' }
  ],
  type: 'veg',
  cuisine: 'Spanish',
  steps: [
    'In a saucepan, melt sugar until caramelized, pour into a mold.',
    'In another bowl, whisk milk, eggs, and vanilla together.',
    'Pour the mixture into the mold over the caramel.',
    'Bake in a water bath at 350°F (175°C) for about 45 minutes.',
    'Cool, then invert onto a plate and drizzle with caramel sauce.'
  ],
  date: new Date('2024-11-10'),
  isFavorite: false,
  serves: 6,
  timeTaken: '90 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Dessert'
},
// German Cuisine
{
  id: 'r56',
  name: 'Sauerbraten',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 450,
  description: 'A pot roast, typically of beef, marinated before slow-cooking for a tender and flavorful dish.',
  ingredients: [
    { name: 'Beef Roast', amount: '1.5 kg' },
    { name: 'Vinegar', amount: '1 cup' },
    { name: 'Water', amount: '1 cup' },
    { name: 'Onion', amount: '1, sliced' },
    { name: 'Carrots', amount: '2, chopped' },
    { name: 'Spices (Bay leaf, Cloves, Peppercorns)', amount: 'to taste' },
    { name: 'Sugar', amount: '1 tbsp' }
  ],
  type: 'non-veg',
  cuisine: 'German',
  steps: [
    'Marinate the beef in vinegar, water, and spices for 2-3 days in the fridge.',
    'Remove meat from marinade, pat dry, and sear in a pot.',
    'Add onions and carrots, then pour in marinade.',
    'Cover and cook on low heat for 3-4 hours until tender.',
    'Serve with gravy over mashed potatoes or bread dumplings.'
  ],
  date: new Date('2024-11-15'),
  isFavorite: false,
  serves: 6,
  timeTaken: '30 mins (plus marinating)',
  tags: ['Main Course', 'Hearty'],
  imgTag: 'Dinner'
},

{
  id: 'r57',
  name: 'Bratwurst',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 300,
  description: 'German sausages made of pork, beef, or veal, flavored with spices and grilled to perfection.',
  ingredients: [
    { name: 'Bratwurst Sausages', amount: '4' },
    { name: 'Onion', amount: '1, sliced' },
    { name: 'Sauerkraut', amount: '1 cup' },
    { name: 'Mustard', amount: 'for serving' }
  ],
  type: 'non-veg',
  cuisine: 'German',
  steps: [
    'Grill or pan-fry the bratwurst until cooked through and browned.',
    'Sauté onions until golden brown.',
    'Serve sausages with sautéed onions and sauerkraut, drizzled with mustard.'
  ],
  date: new Date('2024-11-20'),
  isFavorite: false,
  serves: 4,
  timeTaken: '25 mins',
  tags: ['Main Course', 'Grilled'],
  imgTag: 'Dinner'
},

{
  id: 'r58',
  name: 'Pretzel (Brezel)',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 150,
  description: 'A soft and chewy German bread, traditionally twisted into a knot shape and sprinkled with coarse salt.',
  ingredients: [
    { name: 'Flour', amount: '4 cups' },
    { name: 'Water', amount: '1.5 cups' },
    { name: 'Yeast', amount: '1 packet' },
    { name: 'Baking Soda', amount: '1/4 cup' },
    { name: 'Coarse Salt', amount: 'for sprinkling' }
  ],
  type: 'veg',
  cuisine: 'German',
  steps: [
    'Mix flour, yeast, and water to form a dough. Knead until smooth.',
    'Let the dough rise until doubled in size.',
    'Shape into pretzels, boil briefly in baking soda water, then bake until golden.',
    'Sprinkle with coarse salt before serving.'
  ],
  date: new Date('2024-11-25'),
  isFavorite: false,
  serves: 8,
  timeTaken: '2 hours',
  tags: ['Snack', 'Baked'],
  imgTag: 'Snacks'
},

{
  id: 'r59',
  name: 'Black Forest Cake',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 400,
  description: 'A rich chocolate cake layered with whipped cream and cherries, originating from the Black Forest region.',
  ingredients: [
    { name: 'Chocolate Cake', amount: '2 layers' },
    { name: 'Whipped Cream', amount: '2 cups' },
    { name: 'Cherries', amount: '1 cup, pitted' },
    { name: 'Kirsch (cherry schnapps)', amount: '1/4 cup' },
    { name: 'Chocolate Shavings', amount: 'for decoration' }
  ],
  type: 'veg',
  cuisine: 'German',
  steps: [
    'Layer the chocolate cakes with whipped cream and cherries in between.',
    'Soak the layers with kirsch before stacking.',
    'Cover the entire cake with whipped cream and top with chocolate shavings.'
  ],
  date: new Date('2024-12-01'),
  isFavorite: false,
  serves: 10,
  timeTaken: '90 mins',
  tags: ['Dessert', 'Sweet'],
  imgTag: 'Dessert'
},

{
  id: 'r60',
  name: 'Kartoffelsalat (Potato Salad)',
  imagePath: 'https://images.unsplash.com/photo-1469307670224-ee31d24b6b9a?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpc2h8ZW58MHx8MHx8fDA%3D',
  calories: 200,
  description: 'A traditional German potato salad made with vinegar, oil, and fresh herbs.',
  ingredients: [
    { name: 'Potatoes', amount: '4, boiled and diced' },
    { name: 'Onion', amount: '1, finely chopped' },
    { name: 'Vinegar', amount: '3 tbsp' },
    { name: 'Olive Oil', amount: '2 tbsp' },
    { name: 'Parsley', amount: '1/4 cup, chopped' }
  ],
  type: 'veg',
  cuisine: 'German',
  steps: [
    'In a bowl, combine diced potatoes, onion, vinegar, and olive oil.',
    'Toss gently and sprinkle with fresh parsley.',
    'Chill in the refrigerator before serving.'
  ],
  date: new Date('2024-12-05'),
  isFavorite: false,
  serves: 4,
  timeTaken: '20 mins',
  tags: ['Side Dish', 'Salad'],
  imgTag: 'Sides'
},

];

const shuffleArray = (array: RecipeType[]): RecipeType[] => {
  for (let i = array.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap
  }
  return array;
};

export default shuffleArray(RecipeData);
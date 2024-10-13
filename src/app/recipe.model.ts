export interface RecipeType {
    id: string;
    name: string;
    imagePath: string;
    calories: number | string;
    ingredients: {
        name: string;
        amount: string;
    }[];
    type: 'veg' | 'non-veg';
    cuisine: string;
    steps: string[];  // array of strings
    date: Date;
    favourite: boolean;  // New field: to mark if the recipe is a favorite
    serves: string;  // New field: to specify how many people the recipe serves
    timeTaken: string;  // New field: to specify the total time taken
    tags: string[];  // New field: an array of tags for additional categorization
}

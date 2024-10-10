export interface RecipeType {
    id: string;
    name: string;
    imagePath: string;
    calories: number | string;
    ingredients: {
        name: string;
        amount: number | string;
    }
    type: 'veg' | 'non-veg';
    cuisine: string;
    steps: string[];  // array of strings
    date: Date;
}
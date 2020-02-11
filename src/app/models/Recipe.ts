import { Ratings } from './Rating';
import { Instruction } from './Instruction';
import { Ingredient } from './Ingredient';


export class Recipe {

    id
    name: string;
    account;
    imageUrl: string;
    instructionList: Instruction[];
    ingredientList: Ingredient[];
    numberOfRating;
    averageRating;
    description: string;
    categories;
    published: boolean;

    constructor(init?: Partial<Recipe>) {
        Object.assign(this, init)
    }


}
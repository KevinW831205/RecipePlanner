import { Ratings } from './Ratings';
import { Instruction } from './Instruction';
import { Ingredient } from './Ingredient';


export class Recipe {

    id
    name: string;
    account;
    instructionList: Instruction[];
    ingredientList;
    numberOfRating;
    averageRating;
    description: string;
    categories;
    published: boolean;

    constructor(init?: Partial<Recipe>) {
        Object.assign(this, init)
    }




    // getId(){
    //     return this.id
    // }

    // getName(){
    //     return this.name;
    // }

    // getAuthor(){
    //     return this.author;
    // }

    // getInstructions(){
    //     return this.instructionList;
    // }

    // getIngredients(){
    //     return this.ingredientList;
    // }

    // getNumberOfRating(){
    //     return this.numberOfRating;
    // }

    // getAverageRating(){
    //     return this.averageRating;
    // }

    // getDescription(){
    //     return this.description;
    // }



}
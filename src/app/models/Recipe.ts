import { Ratings } from './Ratings';
import { Instruction } from './Instruction';
import { Ingredient } from './Ingredient';


export class Recipe {

    name;

    constructor(
        private id: number,
        name: string,
        private author: Account,
        private instructionList: Instruction[],
        private ingredientList: Ingredient[],
        private numberOfRating: number,
        private averageRating: number,
        private description: string
    ) { 
        this.name = name;
    }

    getId(){
        return this.id
    }

    // getName(){
    //     return this.name;
    // }

    getAuthor(){
        return this.author;
    }

    getInstructions(){
        return this.instructionList;
    }

    getIngredients(){
        return this.ingredientList;
    }

    getNumberOfRating(){
        return this.numberOfRating;
    }

    getAverageRating(){
        return this.averageRating;
    }

    getDescription(){
        return this.description;
    }



}
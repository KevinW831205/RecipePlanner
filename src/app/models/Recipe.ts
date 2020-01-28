import { Ratings } from './Ratings';
import { Instruction } from './Instruction';
import { Ingredient } from './Ingredient';


export class Recipe {


    constructor(
        private id: number,
        name: string,
        authorId: number,
        ratings: Ratings,
        instructionList: Instruction[],
        ingredientList: Ingredient[],
        numberOfRating: number,
        averageRating: number,
        description: string
    ) { 
    }

    getId(){
        return this.id
    }



}
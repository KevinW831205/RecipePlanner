import { Ratings } from './Ratings';
import { Instruction } from './Instruction';
import { Ingredient } from './Ingredient';


export class Recipe {
    constructor(
        private id: number,
        private name: string,
        private authorId: number,
        private ratings: Ratings,
        private instructionList: Instruction[],
        private ingredientList: Ingredient[],
        private numberOfRating: number,
        private averageRating: number,
        private description: string
    ) { }

}
import { Ratings } from './Ratings';
import { Instructions } from './Instructions';
import { Ingredients } from './Ingredients';


export class Recipe {
    constructor(
        private id: number,
        private name: string,
        private authorId: number,
        private ratings: Ratings,
        private instructionList: Instructions,
        private ingredientList: Ingredients,
        private numberOfRating: number,
        private averageRating: number
    ) { }

}
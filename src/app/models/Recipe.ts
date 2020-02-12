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

    addRating(rating: number) {
        this.numberOfRating++;
        let newAverage = this.getTotalRating() + rating;
        this.averageRating = newAverage;
    }

    private getTotalRating() {
        return this.averageRating * this.numberOfRating;
    }

}
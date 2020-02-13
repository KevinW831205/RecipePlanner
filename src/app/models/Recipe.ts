import { Instruction } from './Instruction';
import { Ingredient } from './Ingredient';
import { Account } from './Account';
import { Category } from './Category';


export class Recipe {

    id
    name: string;
    account: Account;
    imageUrl: string;
    instructionList: Instruction[];
    ingredientList: Ingredient[];
    numberOfRating;
    averageRating;
    description: string;
    categoryTags: Category[];
    published: boolean;

    constructor(init?: Partial<Recipe>) {
        Object.assign(this, init)
    }

    addRating(rating: number) {
        this.numberOfRating++;
        let newAverage = (this.getTotalRating() + rating) / this.numberOfRating;
        this.averageRating = newAverage;
    }

    updateRating(newRating: number, oldRating: number) {
        let oldTotal = this.getTotalRating();
        let newTotal = oldTotal - oldRating + newRating;
        this.averageRating = newTotal / this.numberOfRating;
    }

    private getTotalRating(): number {
        return this.averageRating * this.numberOfRating;
    }

}
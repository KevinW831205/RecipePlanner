export class Ingredient {

    id: number;
    recipeId: number;
    name: string;
    amount: string;

    constructor(init?: Partial<Ingredient>) {
        Object.assign(this, init)
    }
}
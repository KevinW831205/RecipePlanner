import { Recipe } from './Recipe';

export class Category {
    id: number;
    name: string;
    recipes: Recipe[];

    constructor(init?: Partial<Recipe>) {
        Object.assign(this, init)
    }
}
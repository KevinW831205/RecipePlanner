export class Rating {
    id: number;
    accountId: number;
    recipeId: number;
    rating: number;
    constructor(init?: Partial<Rating>) {
        Object.assign(this, init)
    }

}
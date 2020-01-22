export class Ingredient {
    constructor(
        private id : number,
        private recipeId: number,
        private name: string,
        private amount : string
    ){}
}
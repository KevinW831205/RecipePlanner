
export class Instruction {
    id: number;
    recipeId: number;
    instruction: String;
    instructionOrder: number;


    constructor(init?: Partial<Instruction>) {
        Object.assign(this, init)
    }

}
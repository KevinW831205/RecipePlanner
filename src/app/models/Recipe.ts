import { Ratings } from './Ratings';
import { Instruction } from './Instruction';
import { Ingredient } from './Ingredient';


export class Recipe {

    id
    name;
    author;
    instructionList;
    ingredientList;
    numberOfRating
    averageRating;
    description;
    categories;
    published:boolean;

    constructor(
        id: number,
        name: string,
        author: Account,
        instructionList: Instruction[],
        ingredientList: Ingredient[],
        numberOfRating: number,
        averageRating: number,
        description: string,
        categories: any[]
    ) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.instructionList = instructionList;
        this.ingredientList = ingredientList;
        this.numberOfRating = numberOfRating;
        this.averageRating = averageRating;
        this.description = description;
        this.categories = categories;
    }




    // getId(){
    //     return this.id
    // }

    // getName(){
    //     return this.name;
    // }

    // getAuthor(){
    //     return this.author;
    // }

    // getInstructions(){
    //     return this.instructionList;
    // }

    // getIngredients(){
    //     return this.ingredientList;
    // }

    // getNumberOfRating(){
    //     return this.numberOfRating;
    // }

    // getAverageRating(){
    //     return this.averageRating;
    // }

    // getDescription(){
    //     return this.description;
    // }



}
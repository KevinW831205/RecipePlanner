import { Recipe } from './Recipe';

export class Account {
    id : number;
    username: string;
    admin: boolean;
    profileImageUrl: string;
    aboutMe: string;
    recipesCreated: Recipe[];


    constructor(init?: Partial<Account> ){
        
    }

}
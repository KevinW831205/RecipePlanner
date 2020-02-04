export class Account {
    id : number;
    username: string;
    admin: boolean;
    profileImageUrl: string;


    constructor(init?: Partial<Account> ){}

}
export class Account {
    id : number;
    username: string;
    admin: boolean;
    profileImageUrl: string;
    aboutMe: string;


    constructor(init?: Partial<Account> ){}

}
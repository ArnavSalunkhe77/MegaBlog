import conf from '../Conf.js'
import {Client , Account , ID} from 'appwrite'

// this class is used to handle all the authentication related operations with appwrite backend .
// iff tommorow we remove appwrite and use some ohter backend we can just change this these appwrite specific code in this class and rest of the application will remain same.
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}) {
        try{    
            const userAccount = await this.account.create(ID.unique() , email , password , name);
            if(userAccount){
                return this.Login({email,password});
            } 

        } catch(error){
            throw error;
        }
    }
    async Login({email, password}) {
        try{
            const userAccount = await this.account.createEmailSession(email , password);
            return userAccount;
        } catch(error){
            throw error;
        }
    }
    async getCurrUser(){
        try{
            return await this.account.get();
        } catch(error){
            throw error;
        }
        return null;
    }
    async Logout(){
        try{
            await this.account.deleteSessions('current'); // 'current' will delete the current session
        } catch(error){
            throw error;
        }
    }
}
const authService = new AuthService();


export default AuthService;
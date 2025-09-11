export class UserService{
    constructor(UserRepository){
        this.repo=UserRepository
    }
    async createUser(dto){}
    async listUser(){}
    async getUser(id){
        return this.repo.findById(id);
    }
    async 
}
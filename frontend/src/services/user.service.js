import createApiClient from "./api.service";

class UserService {
    
    constructor(baseUrl = "/api/user") {
        this.api = createApiClient(baseUrl);
    } 

    // async login() {
    //     return (await this.api.post("/login")).data;
    // }

    async getAll() {
        return (await this.api.get("/")).data;
    } 

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    } 
} 

export default new UserService();
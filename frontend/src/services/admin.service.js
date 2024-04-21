import createApiClient from "./api.service";

class AdminService {
    
    constructor(baseUrl = "/api/admin") {
        this.api = createApiClient(baseUrl);
    } 
    async getAll() {
        return (await this.api.get("/book")).data;
    } 
    
    async create(data) {
        return (await this.api.post("/book", data)).data;
    } 
    
    async deleteAll() {
        return (await this.api.delete("/book")).data;
    } 

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    } 

    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    } 

    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
} 

export default new AdminService();
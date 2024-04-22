import createApiClient from "./api.service";

class AdminService {
    
    constructor(baseUrl = "/api/admin") {
        this.api = createApiClient(baseUrl);
    } 
    
    // Book Management
    async getAllBooks() {
        return (await this.api.get("/book")).data;
    } 
    
    async createBook(data) {
        return (await this.api.post("/book/add", data)).data;
    } 
    
    async deleteAllBooks() {
        return (await this.api.delete("/book")).data;
    } 

    async getBook(id) {
        return (await this.api.get(`/book/${id}`)).data;
    } 

    async updateBook(id, data) {
        return (await this.api.put(`book/${id}`, data)).data;
    } 

    async deleteBook(id) {
        return (await this.api.delete(`book/${id}`)).data;
    }

    // Publishing Company Management
    async getAllPCs() {
        return (await this.api.get("/pcomp")).data;
    } 
    
    async createPC(data) {
        return (await this.api.post("/pcomp/add", data)).data;
    } 
    
    async deleteAllPCs() {
        return (await this.api.delete("/pcomp")).data;
    } 

    async getPC(id) {
        return (await this.api.get(`/pcomp/${id}`)).data;
    } 

    async updatePC(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    } 

    async deletePC(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
} 

export default new AdminService();
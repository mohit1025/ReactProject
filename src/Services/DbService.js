import { Client, Databases, Query, ID } from "appwrite";
import config from '../Config/Config.js'


export class DbService {
    client;
    databases;
    
    /**
     *create instance for DB CRUD operations
     */
    constructor() {
        this.client = new Client()
            .setEndpoint(config.appWriteUrl) // Your API Endpoint
            .setProject(config.appDbId); // Your project ID

        this.databases = new Databases(this.client);
        
    }
    async createPost({ title, content, featured_image, userid, status }) {
        try {
            const result = await this.databases.createDocument(
                config.appDbId, // databaseId
                config.appCollectionId, // collectionId
                ID.unique(), // documentId
                { title, content, featured_image, userid, status }, // data
            )
            return result

        } catch (error) {
            throw error
        }
    }
    async updatePost(id, { title, content, featured_image, status }) {
        try {
            const result = await this.databases.updateDocument(
                config.appDbId, // databaseId
                config.appCollectionId, // collectionId
                id, // documentId
                { title, content, featured_image, status }, // data
            )
            return result

        } catch (error) {
            throw error
        }
    }
    async deletePost(id) {
        try {
            const result = await this.databases.deleteDocument(
                config.appDbId, // databaseId
                config.appCollectionId, // collectionId
                id // documentId
            )
            if (result) {
                return true
            }
            else {
                return false
            }

        } catch (error) {
            throw error
        }
    }
    async getPost(id) {
        try {
            const result = await this.databases.getDocument(
                config.appDbId, // databaseId
                config.appCollectionId, // collectionId
                id, // documentId
            );
            return result;
        } catch (error) {
            throw error
        }
    }
    async getAllPost(){
        try {
            const result = await this.databases.listDocuments(
                config.appDbId,
                config.appCollectionId,
                [
                    Query.equal('status', 'active'),
                   
                ]
            );
            return result 
        } catch (error) {
            throw error
        }
    }
}

const dbService = new DbService()

export default dbService;



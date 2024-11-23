import { Client, Storage, ID } from "appwrite";
import config from '../Config/Config.js'

export class FileService{
    client
    storage
    /**
     *create instance for File Upload, delete and preview operations
     */
    constructor() {
        this.client = new Client()
            .setEndpoint(config.appWriteUrl) // Your API Endpoint
            .setProject(config.appDbId); // Your project ID

        this.storage = new Storage(this.client);    
    }
    async uploadFile(file){
        try {
            const promise = await storage.createFile(
                config.appBucketId,
                ID.unique(),
                file
            );
            if(promise){
                return true
            }
            else{
                return false
            }
            
        } catch (error) {
            throw error
        }
    }
    async deleteFile(fileId){
        try {
            const result = await storage.deleteFile(
                config.appBucketId, // bucketId
                fileId // fileId
            );
            if(result){
                return true
            }
            else{
                return false
            }
            
        } catch (error) {
            throw error
        }
    }
    async getFilePreview(fileId){
        try {
            const result = storage.getFilePreview(
                config.appBucketId, // bucketId
                fileId, // fileId
            )   
            return result
        } catch (error) {
            throw error
        }
    }
}

const fileService = new FileService()

export default fileService;
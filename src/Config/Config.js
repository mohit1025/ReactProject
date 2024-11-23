const config ={
    appWriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appDbId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appAPIKey: String(import.meta.env.VITE_APPWRITE_API_KEY)
}

export default config
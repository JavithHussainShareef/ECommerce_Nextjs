
import { MongoClient, Db, ServerApiVersion }  from 'mongodb';
// javithimraan
// 0POl5YddXB30FEbZ

let cachedClient : MongoClient | null = null;
let cachedDb : Db | null = null;


export async function connectToDb(){

    if(cachedClient && cachedDb){
        return {client : cachedClient , db:cachedDb}
    }

    // const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASSWORD}@cluster0.rmzzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const uri = `mongodb+srv://javithimraan:0POl5YddXB30FEbZ@cluster0.rmzzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    
    
        
        await client.connect();

        cachedClient = client;
        cachedDb = client.db('ecommerce-nextjs');
      return {client,db : client.db('ecommerce-nextjs')}    
}


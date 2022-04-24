//dotenv loads variables for .env files
const dotenv = require('dotenv');
dotenv.config();
//connect to mongo db
const { MongoClient } = require('mongodb');

//initilize a variable to keep track of your db connection
let _db;

//function to connect to mongodb (callback functions, are functions passed into another function as an argument)
const initDb = (callback) => {
    //check to see if db is already initialized
    if(_db){
        console.log('Db is already initialized.');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if(!_db) {
        throw Error('DB is not initilized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
};


//**************test code connecting to mongodb*******************************************************************************
    //create a constant for connection uri
    // const uri = "mongodb+srv://cermy1995:z13GRU$$@contacts.gqyx9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    //create instance of mongo client
    // const client = new MongoClient(uri);
    //connect to cluster
    //this returns a promise, so we use await to make sure we wait for returned promise. 
    // try {
    //     await client.connect();
    //     //call function to print all databases in mongodb
    //     await listDB(client);
    // } catch(e){
    //     console.log(e);
    // } finally {
    //     await client.close();
    // }
//call the function
// main().catch(console.error);

//function to print db in cluster
// async function listDB(client){
//     const dbList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     dbList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     });
// }
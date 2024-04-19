const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
const {MongoClient, ObjectId} = require("mongodb"); //import mongo client from mongodb
const dotenv = require("dotenv");



dotenv.config(); //load local environment variables from .env file

//DB values
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}`;
const client = new MongoClient(dbUrl);

//set up for easier form data parsing
app.use(express.urlencoded());
app.use(express.json());

app.get('/', async (req, res) => {
    let playlists = await getPlayLists();
    let musiclists = await getMusicLists();
    res.json({ playlists : playlists.slice(0,2), musiclists : musiclists.slice(0,4)});
});
app.get('/playlist', async (req, res) => {
    let playlists = await getPlayLists();
   
    res.json({ playlists : playlists});
});
app.get('/music', async (req, res) => {
    let musiclists = await getMusicLists();
   
    res.json({musiclists : musiclists});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//MONGODB FUNCTIONS
async function connection(){
    db = client.db("musicdb"); //musicdb is default db in this project
    return db;
}

//Function to select all documents in the musicdb collection
async function getPlayLists(){
    db = await connection();
    let results = db.collection("playList").find({});
    let res = await results.toArray();
    return res;
}
//Function to select all documents in the musicdb collection
async function getMusicLists(){
    db = await connection();
    let results = db.collection("musicList").find({});
    let res = await results.toArray();
    return res;
}

function slice(lists){
    if(lists.length > 4){
        lists = lists.slice(-4);
    }  
    return lists;
}
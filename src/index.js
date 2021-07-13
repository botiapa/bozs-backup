require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID;

const client = new MongoClient(process.env.DB_URL);

client.connect(function(err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(process.env.DB_NAME);
    const coll = db.collection(process.env.DB_COLLECTION_NAME);

    const date = new Date();
    const hu_date = new Date(date.getTime() + (2 * 60 * 60 * 1000)); // TIMEZONE OFFSET

    coll.updateOne(
        { _id: new ObjectID("testtesttest") },
        {
            $push: { dates: hu_date.toTimeString() }
        },
        {upsert: true},
        function(err, result) {
            assert.equal(null, err);

            console.log("Inserted new date. Current dates: ", result);
            client.close();
        }
    )
});
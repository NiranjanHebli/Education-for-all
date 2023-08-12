const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const {MongoClient,ServerApiVersion, ObjectId}= require("mongodb");
const uri ="[YOUR_MONGODB_URI]";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});



async function run() {
  try {
    await client.connect();
    const database = client.db("studentsDB");
    const studentCollection = database.collection("students");

    const database2= client.db("marketplaceDB");
    const marketCollection = database2.collection("market");

    const database3= client.db("scholarshipDB");
    const scholarshipCollection = database3.collection("scholarship");
    

    const database4= client.db("coursesDB");
    const coursesCollection = database4.collection("courses");

    const database5= client.db("forumsDB");
    const forumCollectionBiology = database5.collection("biology");
    const forumCollectionMathematics = database5.collection("mathematics");
    const forumCollectionEconomics = database5.collection("economics");
    const forumCollectionCommunication = database5.collection("communication");
    const forumCollectionPhysics = database5.collection("physics");
    const forumCollectionC = database5.collection("c");
    const forumCollectionCPP = database5.collection("cpp");
    const forumCollectionChemistry = database5.collection("chemistry");
    const forumCollectionHindi = database5.collection("hindi");
    const forumCollectionManagement = database5.collection("management");
    const forumCollectionEnglish = database5.collection("english");
    const forumCollectionJava = database5.collection("java");
    const forumCollectionPython = database5.collection("python");


    app.post("/student", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await studentCollection.insertOne(user);
      res.send(result);
    });

    app.get("/student", async (req, res) => {
      const cursor = studentCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    app.post("/market", async (req, res) => {
      const marketData = req.body;
      console.log(marketData);
      const result = await marketCollection.insertOne(marketData);
      res.send(result);
    });

    app.get("/market", async (req, res) => {
      const cursor = marketCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    app.post("/scholarship", async (req, res) => {
      const scholarshipData = req.body;
      console.log(scholarshipData);
      const result = await scholarshipCollection.insertOne(scholarshipData);
      res.send(result);
    });

    app.get("/scholarship", async (req, res) => {
      const cursor = scholarshipCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    app.post("/courses", async (req, res) => {
      const coursesData = req.body;
      console.log(coursesData);
      const result = await coursesCollection.insertOne(coursesData);
      res.send(result);
    });

    app.get("/courses", async (req, res) => {
      const cursor = coursesCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    app.post("/forum/mathematics", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionMathematics.insertOne(user);
      res.send(result);
    });

    app.get("/forum/mathematics", async (req, res) => {
      const cursor = forumCollectionMathematics.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    app.post("/forum/biology", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionBiology.insertOne(user);
      res.send(result);
    });

    app.get("/forum/biology", async (req, res) => {
      const cursor = forumCollectionBiology.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    app.post("/forum/python", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionPython.insertOne(user);
      res.send(result);
    });

    app.get("/forum/python", async (req, res) => {
      const cursor = forumCollectionPython.find();
      const result = await cursor.toArray();
      res.send(result);

    });
    app.post("/forum/physics", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionPhysics.insertOne(user);
      res.send(result);
    });

    app.get("/forum/physics", async (req, res) => {
      const cursor = forumCollectionPhysics.find();
      const result = await cursor.toArray();
      res.send(result);
    });


    app.post("/forum/chemistry", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionChemistry.insertOne(user);
      res.send(result);
    });

    app.get("/forum/chemistry", async (req, res) => {
      const cursor = forumCollectionChemistry.find();
      const result = await cursor.toArray();
      res.send(result);

    });

   
    app.post("/forum/c", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionC.insertOne(user);
      res.send(result);
    });

    app.get("/forum/c", async (req, res) => {
      const cursor = forumCollectionC.find();
      const result = await cursor.toArray();
      res.send(result);

    });

       
    app.post("/forum/hindi", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionHindi.insertOne(user);
      res.send(result);
    });

    app.get("/forum/hindi", async (req, res) => {
      const cursor = forumCollectionHindi.find();
      const result = await cursor.toArray();
      res.send(result);

    });

       
    app.post("/forum/english", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionEnglish.insertOne(user);
      res.send(result);
    });

    app.get("/forum/english", async (req, res) => {
      const cursor = forumCollectionEnglish.find();
      const result = await cursor.toArray();
      res.send(result);

    });

       
    app.post("/forum/cpp", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionCPP.insertOne(user);
      res.send(result);
    });

    app.get("/forum/cpp", async (req, res) => {
      const cursor = forumCollectionCPP.find();
      const result = await cursor.toArray();
      res.send(result);

    });

       
    app.post("/forum/management", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionManagement.insertOne(user);
      res.send(result);
    });

    app.get("/forum/management", async (req, res) => {
      const cursor = forumCollectionManagement.find();
      const result = await cursor.toArray();
      res.send(result);

    });

       
    app.post("/forum/economics", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionEconomics.insertOne(user);
      res.send(result);
    });

    app.get("/forum/economics", async (req, res) => {
      const cursor = forumCollectionEconomics.find();
      const result = await cursor.toArray();
      res.send(result);

    });

       
    app.post("/forum/java", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionJava.insertOne(user);
      res.send(result);
    });

    app.get("/forum/java", async (req, res) => {
      const cursor = forumCollectionJava.find();
      const result = await cursor.toArray();
      res.send(result);

    });

       
    app.post("/forum/communication", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await forumCollectionCommunication.insertOne(user);
      res.send(result);
    });

    app.get("/forum/communication", async (req, res) => {
      const cursor = forumCollectionCommunication.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
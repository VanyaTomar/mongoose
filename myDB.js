const mongoose = require("mongoose"); //object has been created

mongoose.connect("mongodb://localhost:27017/VanyaDB", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION WAS SUCCESSFULL.........")).catch((err) => console.log(err));


//define mongoose schema
const mySchemaa = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        completed: Boolean
    }
)


//collection creation
const lecture = mongoose.model("lecture", mySchemaa);

//create document or insert using asynk await

const createDocument = async () => {
    try {
        const a = new lecture({
            name: "HTML & CSS",
            completed: true
        })
        const b = new lecture({
            name: "Node.js & Express.js",
            completed: true
        })
        const c = new lecture({
            name: "Mongoose",
            completed: true
        })
        const d = new lecture({
            name: "LPM Project",
            completed: false
        })
        const result = await lecture.insertMany([a, b, c, d]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();

const getDocument = async () => {
    try {
        const result = await lecture.find({ completed: false });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getDocument();
// update document
const updateDocument = async (_id) => {
    try {
        const result = await lecture.updateOne({ _id}, {
            $set: {
                completed: true
            }
        });

        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

updateDocument("626a4b12c0f1f6bff8355b18");


//delete document

const deleteDocument= async(_id) =>{
    try{
        const result = await lecture.deleteOne({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

deleteDocument("626a4b931909d2ce566013dc");
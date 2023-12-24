import express from 'express';
import connectDB from './db/connectDB.js';
import {join} from 'path';
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDB(DATABASE_URL);
app.use(express.urlencoded({extended:true}))

// static Files 
// app.use(express.static(join(process.cwd(), "public")))
app.use("/student", express.static(join(process.cwd(), "public")))
app.use("/student/edit", express.static(join(process.cwd(), "public")))

// Load route Files here
app.use("/student", web);
app.set("view engine", "ejs"); 


app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});


import StudentModel from "../models/Student.js"

class StudentController {
    
    static createDoc = async(req, res) =>{
        console.log("I am createDoc .........");

        try{
            const {name, age, fees, pre} = req.body;
           const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees,
                adv: 2500,
                pre : pre,
           })

           const result = await doc.save();
           console.log("I am createDoc ......... result ", result);

           res.redirect("/student")
        }catch(error){
            console.log("createDoc error", error);
        }

    }
    
    static editDoc = (req, res) =>{
        console.log("I am editDoc.........");
        res.redirect("/edit")
    }

    static updateDocById = (req, res) =>{
        console.log("I am updateDocById.........");
        res.redirect("/student")
    }
    
    static deleteDocById = (req, res) =>{
        console.log("I am deleteDocById.........");
        res.redirect("/student")
    }

    static getAllDoc = async (req, res) =>{
        console.log("I am getAllDoc.........");

        try{
            const result = await StudentModel.find()

            console.log("R___________ result", result);
            res.render("index", {data : result})
        }catch(error){
            console.log("get All doc error", error);
        }
    }
}


export default StudentController;
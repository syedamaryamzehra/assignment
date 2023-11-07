 import inquirer from "inquirer";

 const answers:{
    sentence:string

 }= await inquirer.prompt([
    {
        name:"sentence",
        type:"input", 
        message:"enter your sentence to count a word:"
    }
 ])
 const words= answers.sentence.split("")
 console.log(words)
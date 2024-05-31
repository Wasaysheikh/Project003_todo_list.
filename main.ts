import inquirer from "inquirer";
let todos = [];
let condition = true;

while(condition)
    {
        let addTask =await inquirer.prompt(
        [
            {
               name:"todo",
               type:"input",
               message:"What you want to add in you Todas?"
 
            },
            {
               name:"Addmore",
               type:"confrim",
               message:"Do you want add more",
               default:"false"
            }
    
        ]

    );
    todos.push(addTask.todo);
    condition = addTask.Addmore

    console.log(todos)



}
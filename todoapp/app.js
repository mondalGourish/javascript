let todo = [];
let req = prompt("Please enter your request:");
//console.log(req);
while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }
    if(req=="list"){
        console.log("-------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------");
    }else if(req=="add"){
        let newTask = prompt("Enter new task:");
        todo.push(newTask);
        console.log("Task added");
    }else if(req == "delete"){
        let idx = prompt("Enter the task index to delete:");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("Wrong request.");
    }
    req = prompt("Please enter your request:");

}
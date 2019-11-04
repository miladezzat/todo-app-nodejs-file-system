const fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'todolist.json');

function read() {
        const data = fs.readFileSync(filePath,{encoding:'utf-8'});
        if(data){
            const todos = JSON.parse(data);
            return todos;
        } else{
            var x = [];
            return x;
        }
}

function write(todos){
    var todos = JSON.stringify(todos);
    if(fs.existsSync(filePath)){
        fs.writeFileSync(filePath, todos);
    }
}
function checkExist() {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
}

function add(title,body) {
    var todos = read();
    var id;
    if(todos.length ==0){
        id = 1;
    } else{
        var len = todos.length-1;
        id = todos[len].id;
        id++;
    }
    var obj ={
        id:id,
        title : title,
        body:body,
        check: false
    };
    todos.push(obj);
    console.log("New List Added");
    console.log("Number of lists is : ",todos.length );
    write(todos);
}
function list() {
    var todos = read();

    if(todos.length ==0){
        console.log("Nothing");
    } else{
        console.log("Full List");
        console.log("----------------------------------------------------------------");
        console.log(todos);
    }
}

function remove(id) {
    var todos =read();
    if(todos.length > 0){
        var result = todos.filter(function (x) {
            return x.id != id;
        });
        if(result.length == todos.length - 1){
            write(result);
            console.log("Removed");
        } else{
            console.log("No id Found to delete");
        }

    } else{
        console.log("No things to delete");
    }
}

function edit(id,title,body) {
    var todos =read();
    var editable = false;

    var result = todos.map(function (x) {
        if(x.id == parseInt(id)){
            editable = true;
            x.title = title;
            x.body = body;
            return x;
        }
        else
           return x;
    });
    if(editable == true){
        console.log("one row edited");
        write(result);
    } else{
        console.log("id not found to edit");
    }
}
function check(id) {
    var todos =read();
    var checker = false;

    var result = todos.map(function (x) {
        if(x.id == parseInt(id)){
            checker = true;
            if(x.check == true){
                console.log("Already checked");
            } else{
                x.check = true;
                console.log(x);
                console.log("one row checked");
            }

            return x;
        }else{
            return x;
        }
    });

    if(checker == true){
        write(result);
    }else{
        console.log("id not found ");
    }
}
function uncheck(id) {
    var todos =read();
    var checker = false;

    var result = todos.map(function (x) {
        if(x.id == parseInt(id)){
            checker = true;
            if(x.check == false){
                console.log("Already unchecked");
            } else{
                x.check = false;
                console.log(x);
                console.log("one row unchecked");
            }

            return x;
        }else{
            return x;
        }
    });

    if(checker == true){
        write(result);
    }else{
        console.log("id not found ");
    }
}
function allchecked() {
    var todos =read();
    var result = todos.filter(function (x) {
        return x.check == true ;
    });
    console.log(result);
}
function unchecked() {
    var todos =read();
    var result = todos.filter(function (x) {
        return x.check == false ;
    });
    console.log(result);
}

module.exports =  {
    add  : add,
    list : list,
    remove: remove,
    edit:edit,
    check:check,
    allchecked:allchecked,
    uncheck:uncheck,
    unchecked:unchecked,
    checkExist:checkExist
}
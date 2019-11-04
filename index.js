var helpers = require('./helpers.js');
function freindly() {
    console.log("\nThis Program is todo list app");
    console.log('\nyou can list all todo app and you can add \nnew list and edit and delete and check and unckeck\nThe following commands:\n\n1. List: node index.js list\t\t\t2. Add: node index.js add [ title ] [body]\n3. Remove: node index.js [id Of list]\t\t4. Edit: node edit [id] [new title] [new body]\n5. Check: node index.js check [id]\t\t6. Uncheck: node index.js [id]\n7. All Checked: node index.js listcheckec\t8. All Unckecked: node index.js listunckecedk');
}
function main(functionality) {
    freindly();
    helpers.checkExist();

    if (functionality=="list") {
        helpers.list();
    } else if(functionality == "add"){
        helpers.add(process.argv[3],process.argv[4]);
    }else if(functionality == "delete"){
        helpers.remove(process.argv[3]);
    } else if(functionality == "edit"){
        helpers.edit(process.argv[3],process.argv[4],process.argv[5]);
    }else if(functionality == "check"){
        helpers.check(process.argv[3]);
    } else if(functionality == "uncheck"){
        helpers.uncheck(process.argv[3]);
    } else if(functionality == "listchecked"){
        helpers.allchecked()
    } else if(functionality == "listunchecked"){
        helpers.unchecked();
    } 
}

var functionality= process.argv[2];
main(functionality);
const { readJSONFile, writeJSONFile } = require("./scripts/helpers.js");

const { 
     create, 
     index, 
     show, 
     destroy, 
     edit,
     score 
} = require("./scripts/controller.js");

const drinks = readJSONFile("./scripts/cart.js" )

const inform = console.log;

function run() {
const action = process.argv[2];
const item = process.argv[3];

let writeToFile = false;
let updatedItem = [];

switch (action) {
     case "index":
     index(drinks);
     break;
case "create":
     updatedItem = create(drinks, item);
     writeToFile = true;
     break;
case "show":
     inform(drinks, item);
     break;
case "edit":
     inform(drinks, item);
     writeToFile = true;
     break;
case "destroy":
     inform(drinks, item);
     writeToFile = true;
     break;
case 'score':
     score(drinks);
     break;
default:
     inform('There was an error.');
}
if (writeToFile) {
     writeJSONFile("./scripts/cart.js", updatedItem);
}
}

run();
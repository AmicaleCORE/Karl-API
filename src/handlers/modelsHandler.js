const loadFiles = require("./filesHandler");

let cachedModels = {};
let isLoading = false;

function getModel(sequelize, file) {
    if(isLoading === false)
        throw new Error("Models are not loaded yet!");
    if(!cachedModels[file]){
        console.log(`Model ${file} not registered, registering...`);
        cachedModels[file] = require(`../database/models/${file}`)(sequelize);
    }else
        console.log(`Model ${file} already registered, returning...`);
    return cachedModels[file];
}

function loadModels(sequelize) {
    const files = loadFiles("./src/database/models", true);
    isLoading = true;
    files.forEach(file => {
        // console.log(`Registering model ${file}...`);
        getModel(sequelize, file);
    });
    cachedModels = {};
}

module.exports = {
    getModel,
    loadModels
};

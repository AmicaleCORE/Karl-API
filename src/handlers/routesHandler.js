const loadFiles = require("./filesHandler");

module.exports = (router) => {
    console.log("------ Loading routes ------");
    const files = loadFiles("./src/rest/routes", true);
    files.forEach(file => {
        try{
            require(`../rest/routes/${file}`)(router);
            console.log(`✅  Route ${file} registered!`);
        } catch (e){
            console.error(`❌  Error while registering route ${file}: ${e}`);
        }
    });
};

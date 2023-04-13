const loadFiles = require("./filesHandler");

module.exports = (sequelize) => {
    const files = loadFiles("./src/database/models", true);
    files.forEach(file => {
        console.log(`Registering model ${file}...`);
        require(`../database/models/${file}`)(sequelize);
    });
};

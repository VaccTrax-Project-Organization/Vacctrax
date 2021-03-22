const { Seeder } = require("mongo-seeding");
const path = require("path");
const configPath = require('../config/config')

const config = {
    database: configPath.db,
    dropDatabase: true,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(path.resolve("./data"), {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});

seeder
    .import(collections)
    .then(() => {
        console.log("Success");
    })
    .catch((err) => {
        console.log("Error", err);
});

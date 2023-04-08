const { readFileSync } = require('fs');
const { Sequelize }  = require('sequelize');
const Importer = require('mysql-import');

describe('MySQL Sample Database Tests', () => {
    let sequelize;

    beforeAll(async() => {
        const importer = new Importer(
            {user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, host: process.env.HOSTNAME, port: process.env.PORT}
        );

        await importer.import('./classicmodels.sql');
        importer.disconnect();
        sequelize = new Sequelize('classicmodels', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, 
            { host: process.env.HOSTNAME, port: process.env.PORT, dialect: 'mysql'});
    })

    afterAll(async() => {
        await sequelize.query('DROP DATABASE classicmodels', { type: 'RAW'});
        sequelize.close()
    })
})
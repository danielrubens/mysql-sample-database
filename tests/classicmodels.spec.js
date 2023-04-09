const { readFileSync } = require('fs');
const { Sequelize }  = require('sequelize');
const Importer = require('mysql-import');

const { MYSQL_USER, MYSQL_PASSWORD, HOSTNAME, PORT} = process.env
describe('MySQL Sample Database Tests', () => {
    let sequelize;

    beforeAll(async() => {
        const importer = new Importer(
            {user: MYSQL_USER, password: MYSQL_PASSWORD, host: HOSTNAME, port: PORT}
        );
        await importer.import('./classicmodels.sql');
        
        importer.disconnect();
        sequelize = new Sequelize('classicmodels', MYSQL_USER, MYSQL_PASSWORD, 
            { host: HOSTNAME, port: PORT, dialect: 'mysql'});
    })

    afterAll(async() => {
        await sequelize.query('DROP DATABASE classicmodels', { type: 'RAW'});
        sequelize.close()
    })

    it('Return all Employees who report to Bow Antony, Sales Manager', async () => {
        const query = readFileSync('01.employees_report.sql', 'utf-8').trim();
        const result = require('./results/01.employees_report.json')
        expect(await sequelize.query(query, { type: 'SELECT'})).toEqual(result)
    })
    
    it('Find all Customers and theirs orders that were shipped in August 2003', async () => {
        const query = readFileSync('02.customers_orders_shipped.sql', 'utf-8').trim();
        const result = require('./results/02.customers_orders_shipped.json')
        expect(await sequelize.query(query, { type: 'SELECT'})).toEqual(result)
    })

    it('List only the products with orders where products have been ordered by the price of 100 to 150', async () => {
        const query = readFileSync('03.products_orders_price.sql', 'utf-8').trim();
        const result = require('./results/03.products_orders_price.json')
        expect(await sequelize.query(query, { type: 'SELECT'})).toEqual(result)
    })
    
})
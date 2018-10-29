const env = {
    database: 'POC',
    username: 'sa',
    password: 'Fastcars1@',
    host: 'localhost',
    dialectModulePath: 'sequelize-msnodesqlv8',
    dialect: 'mssql',
    port: 32775,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;
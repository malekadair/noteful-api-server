module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || 'postgresql://grace_bodur@localhost/noteful-api',
    TEST_DB_URL: process.env.DB_URL || 'postgresql://grace_bodur@localhost/noteful-api',
}
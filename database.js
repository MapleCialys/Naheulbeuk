const { createClient } = require("@libsql/client");
const db = createClient(
    {
        url: 'file:database.db'
    });

    module.exports = db;
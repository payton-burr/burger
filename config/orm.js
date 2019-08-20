let connection = require('./connection.js');

let orm = {
    selectAll: function(whatToSelect, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [whatToSelect], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(tableName, tableValue, values, cb) {
        let queryString = 'INSERT INTO ?? (?) VALUES (?)';
        connection.query(queryString, [tableName, tableValue, values], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(tableName, col, value, condition, cb) {
        let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [tableName, col, value, condition], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;
let orm = require('../config/orm.js');

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        })
    },
    insertOne: function(tableName, values, cb) {
        orm.insertOne('burgers', tableName, values, function(res) {
            cb(res);
        })
    },
    updateOne: function(col, value, condition, cb) {
        orm.updateOne('burgers', col, value, condition, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;
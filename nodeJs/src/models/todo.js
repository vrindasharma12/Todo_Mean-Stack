const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    task: String
});

var Todo = mongoose.model('Todo', dbSchema, 'todos');
module.exports = { Todo };

var {Todo} = require('../models/todo');
var ObjectId = require('mongoose').Types.ObjectId;


exports.getlist = (req, res) => {
    Todo.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving profile details :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.getlistById = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Todo.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving profile :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.postlist = (req, res) => {
    var todoDetails = new Todo({
        task: req.body.task
    });
    todoDetails.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in profilr Save :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.updatelist = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var todoDetails = {
           task: req.body.task
        };
    Todo.findByIdAndUpdate(req.params.id, { $set: todoDetails }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in profile Update :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.deletelist = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Todo.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in profile Delete :' + JSON.stringify(err, undefined, 2)); }
    });
}

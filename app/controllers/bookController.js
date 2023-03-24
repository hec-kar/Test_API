const Book = require('../models/bookModels');


exports.get_list = (req, res) => {
    Book.get_all((data) => {
        res.send({result: data});
    });
} 

exports.get_detail = (req, res) => {
    Book.getById(req.params.id, (response) => {
        res.send({result: response});
    })
}

exports.add_book = (req, res) => {
    let data = req.body;
    console.log(data);
    
    Book.create(data, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({err: 'Error creating book!'})
        } else {
            console.log(result);
            res.status(200).send({result});
        }
        
    })
}

exports.delete_book = (req, res) => {
    var id = req.params.id;
    Book.remove(id, (response) => {
        res.send({result: response})
    })
}

exports.update_book = (req, res) => {
    let data = req.body;
    console.log(data);
    Book.update(data, (response) => {
        res.send({result: response})
    })
}
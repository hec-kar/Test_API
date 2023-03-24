const db = require('../common/connect');
const Book = function (book) {
    this.id = book.id;
    this.name = book.name;
    this.image = book.image;
    this.author_id = book.author_id;
}

Book.get_all = function (result) {
    db.query('SELECT * FROM book', (err, book) => {
        if (err) {
            result(null);
        } else {
            result(book);
        } 
    })

}

Book.getById = function (id, result) {
    db.query(`SELECT * FROM book WHERE id = ?`, id, (err, book) => {
        if (err || book.length === 0) {
            result(err);
        } else {
            result(book[0]);
        } 
    })
}

Book.create = function (data, result) {
    db.query(`INSERT INTO book SET ?; `, data, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, {id: res.insertId, ...data});
        }
    });
}


Book.remove = function (id, result) {
    db.query(`DELETE FROM book WHERE id = ?`, id, (err, book) => {
        if (err || book.length === 0) {
            result(null);
        } else {
            result(`Xoa thanh cong sach co id la ${id}`)
        }
    })
}

Book.update = function (bookData, result) {
   db.query(`UPDATE book SET name=?, image=?, author_id=? WHERE id=?`,
            [bookData.name, bookData.image, bookData.author_id, bookData.id],
            (err, book)=> {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    result(bookData);
                }
            })
}

module.exports = Book;
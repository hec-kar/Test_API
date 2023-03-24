
module.exports = function (router) {
    var bookController = require('../controllers/bookController')

    router.get('/book/list', bookController.get_list);
    router.get('/book/detail/:id', bookController.get_detail);

    router.post('/book/add', bookController.add_book);
    router.delete('/book/delete/:id', bookController.delete_book);
    router.put('/book/update', bookController.update_book);
}
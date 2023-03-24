exports.home = function (req, res) {
    res.sendFile(__dirname.replace('\\app\\controllers', '/index.html'));
}

exports.about = (req, res) => {
    res.send(__dirname.replace('\\app\\controllers', '/about.html'))
}
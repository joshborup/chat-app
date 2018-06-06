const path = require('path')
module.exports = {
    test: function (req, res) {
        console.log(__dirname)
        res.sendFile(path.join(__dirname,'../../build/index.html'));
    }
}
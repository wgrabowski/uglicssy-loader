'use strict';

const uglicssy = require('uglicssy');

function loader (source) {
    let bundle = uglicssy.bundle();
    return uglicssy.convert(source,'html');
}

module.exports = loader;
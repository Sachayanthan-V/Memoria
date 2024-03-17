const express = require('express');


module.exports.home = async function(req, res) {
    res.send('<h1>Home Page</h1>');
}




import express from 'express'; //const express = require('express')

const app = express(); 

app.get('/', (req, res) => {
    res.json({
        msg: "ok"
    })
});

export default app; //module.exports = app
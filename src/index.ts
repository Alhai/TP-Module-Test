import dotenv from "dotenv"
const express = require('express');
dotenv.config();

const app = require('express')();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

const TEST_VALUE = "hello"

function test(): void {
    console.log(TEST_VALUE);
}

test();

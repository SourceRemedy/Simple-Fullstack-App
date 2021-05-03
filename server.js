const express = require('express')
const sqlite3 = require('sqlite3')
const app = new express()
const db = new sqlite3.Database('./db/fullstack.db')
const users = loadData().users
//3. New posts save on server

//serve client side files
app.use(express.static('public'))
app.use(express.json())


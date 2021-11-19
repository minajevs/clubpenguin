const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
const express = require('express')
const app = express()

var db = new JsonDB(new Config("db", true, false, '/'));

app.get('/apartments/:index', function (req, res) {
  res.json(db.getData(`/houses[0]/apartments[${req.params.index}]`))
})

app.get('/apartments/:index/shower', function (req, res) {
  res.json(db.getData(`/houses[0]/apartments[${req.params.index}]/Hydractiva_shower/measurements`))
})

app.get('/apartments/:index/kitchen-faucet', function (req, res) {
  res.json(db.getData(`/houses[0]/apartments[${req.params.index}]/Kitchen_optima_faucet/measurements`))
})

app.get('/apartments/:index/optima-faucet', function (req, res) {
  res.json(db.getData(`/houses[0]/apartments[${req.params.index}]/Optima_faucet/measurements`))
})

app.get('/apartments/:index/washing-machine', function (req, res) {
  res.json(db.getData(`/houses[0]/apartments[${req.params.index}]/Washing_machine/measurements`))
})

app.get('/apartments/:index/dishwasher', function (req, res) {
  res.json(db.getData(`/houses[0]/apartments[${req.params.index}]/Dishwasher/measurements`))
})

app.listen(3001)

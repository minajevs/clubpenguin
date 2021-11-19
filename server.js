const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
const express = require('express')
const cors = require('cors')
const { getMonth } = require('date-fns')

var db = new JsonDB(new Config("db", true, false, '/'));

const app = express()
app.use(cors())

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

app.get('/apartments/:index/monthly', function(req, res) {
  const {
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  } = db.getData(`/houses[0]/apartments[${req.params.index}]`)

  let result = {
    Consumption: Array(12).fill(0),
    FlowTime: Array(12).fill(0),
    Power_Consumption: Array(12).fill(0)
  }

  ;[
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  ].forEach(({ measurements }) => measurements.forEach(({ TimeStamp, Consumption, FlowTime, Power_Consumption }) => {
    const month = getMonth(new Date(TimeStamp))

    result.Consumption[month] += Number(Consumption)
    result.FlowTime[month] += Number(FlowTime)
    result.Power_Consumption[month] += Number(Power_Consumption)
  }))

  res.json({
    Consumption: result.Consumption.map(item => parseFloat(item.toFixed(2))),
    FlowTime: result.FlowTime.map(item => parseFloat(item.toFixed(2))),
    Power_Consumption: result.Power_Consumption.map(item => parseFloat(item.toFixed(2)))
  })
})

app.listen(3001)

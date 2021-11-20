const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
const express = require('express')
const cors = require('cors')
const { getMonth, getWeek, getDay, getDaysInMonth, getDate, isToday, isYesterday } = require('date-fns')

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

app.get('/apartments/:index/month-temp', function(req, res) {
  const {
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet
  } = queryDb(req.params.index)

  const date = new Date()
  const current = getMonth(date)

  let sum = 0, count = 0

  ;[
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet
  ].forEach(({ measurements }) => measurements.forEach(({ TimeStamp, Temp }) => {
    const date = new Date(TimeStamp)
    const month = getMonth(date)

    if (month !== current) return

    sum += Number(Temp)
    count++
  }))

  const avg = sum / count

  res.json({
    Temp_Avg: avg,
    Cold_Percentage: 100 - (avg - 20) * 2.5
  })
})

app.get('/apartments/:index/week-temp', function(req, res) {
  const {
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet
  } = queryDb(req.params.index)

  const date = new Date()
  const current = getWeek(date)

  let sum = 0, count = 0

  ;[
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet
  ].forEach(({ measurements }) => measurements.forEach(({ TimeStamp, Temp }) => {
    const date = new Date(TimeStamp)
    const week = getWeek(date)

    if (week !== current) return

    sum += Number(Temp)
    count++
  }))

  const avg = sum / count

  res.json({
    Temp_Avg: avg,
    Cold_Percentage: 100 - (avg - 20) * 2.5
  })
})

app.get('/apartments/:index/monthly', function(req, res) {
  res.json(monthlySum(req.params.index))
})

app.get('/apartments/:index/weekly', function(req, res) {
  res.json(weeklySum(req.params.index))
})

app.get('/apartments/:index/month', function(req, res) {
  const {
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  } = queryDb(req.params.index)

  const date = new Date()
  const current = getMonth(date)

  let result = initial(getDaysInMonth(date))

  ;[
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  ].forEach(({ measurements }) => measurements.forEach(({ TimeStamp, Consumption, FlowTime, Power_Consumption }) => {
    const date = new Date(TimeStamp)
    const month = getMonth(date)

    if (month !== current) return

    const day = getDate(date)

    result.Consumption[day - 1] += Number(Consumption)
    result.FlowTime[day - 1] += Number(FlowTime)
    result.Power_Consumption[day - 1] += Number(Power_Consumption)
  }))

  res.json(round(result))
})


app.get('/apartments/:index/week', function(req, res) {
    const {
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  } = queryDb(req.params.index)

  let result = initial(7)

  const current = getWeek(new Date())

  ;[
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  ].forEach(({ measurements }) => measurements.forEach(({ TimeStamp, Consumption, FlowTime, Power_Consumption }) => {
    const date = new Date(TimeStamp)
    const week = getWeek(date)

    if (week !== current) return

    const day = getDay(date)

    const index = day === 0 ? 6 : day - 1

    result.Consumption[index] += Number(Consumption)
    result.FlowTime[index] += Number(FlowTime)
    result.Power_Consumption[index] += Number(Power_Consumption)
  }))

  res.json(round(result))
})

app.get('/apartments/:index/usage', function(req, res) {
  const {
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  } = queryDb(req.params.index)

  let result = {
    today: 0,
    yesterday: 0
  }

  ;[
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  ].forEach(({ measurements }) => measurements.forEach(({ TimeStamp, Consumption }) => {
    const date = new Date(TimeStamp.replace('2020', '2021'))

    if (isToday(date)) {
      result.today += Number(Consumption)
    }

    if (isYesterday(date)) {
      result.yesterday += Number(Consumption)
    }
  }))

  res.json(result)
})

const monthlySum = (index) => {
  const {
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  } = queryDb(index)

  let result = initial(12)

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

  return round(result)
}

const weeklySum = (index) => {
  const {
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  } = queryDb(index)

  let result = initial(52)

  ;[
    Hydractiva_shower,
    Kitchen_optima_faucet,
    Optima_faucet,
    Washing_machine,
    Dishwasher
  ].forEach(({ measurements }) => measurements.forEach(({ TimeStamp, Consumption, FlowTime, Power_Consumption }) => {
    const week = getWeek(new Date(TimeStamp))

    result.Consumption[week - 1] += Number(Consumption)
    result.FlowTime[week - 1] += Number(FlowTime)
    result.Power_Consumption[week - 1] += Number(Power_Consumption)
  }))

  return round(result)
}

const queryDb = (index) =>
  db.getData(`/houses[0]/apartments[${index}]`)

const initial = (count) => ({
  Consumption: Array(count).fill(0),
  FlowTime: Array(count).fill(0),
  Power_Consumption: Array(count).fill(0)
})

const round = (result) => ({
  Consumption: result.Consumption.map(item => parseFloat(item.toFixed(2))),
  FlowTime: result.FlowTime.map(item => parseFloat(item.toFixed(2))),
  Power_Consumption: result.Power_Consumption.map(item => parseFloat(item.toFixed(2)))
})

app.listen(3001)

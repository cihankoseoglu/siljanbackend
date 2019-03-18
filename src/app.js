const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/todos', (req, res) => {
  res.send([
    {
      title: "Take out the garbage",
    },
    {
      title: "Pick up kids from school",
    },
    {
      title: "Finish backend for siljan",
    }
  ])
})

app.listen(process.env.PORT || 8081)


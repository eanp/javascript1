const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.status(200).json(
    {
    status:200,
    message:"aplikasi berhasil dijalankan"
}
)})

app.listen(3030)
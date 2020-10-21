const express = require('express');
const cors = require('cors');
const api = require('./api');
const not_found = require('./middlewares');

const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  next()
});

app.get('/', (req, res) => {
  res.json({
    pesan: "Hai, Ini api untuk mendapatkan data hari libur nasional indonesia",
    data_dari: "https://publicholidays.co.id/",
    cara_menggunakan: {
      cari_berdasarkan_tahun: "/api/hari-libur/[tahun]"
    }
  })
});

app.use('/api', api);
app.use(not_found)

module.exports = app;

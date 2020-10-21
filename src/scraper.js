const fetch = require('node-fetch')
const cheerio = require('cheerio')

const baseUrl = 'https://publicholidays.co.id/id/'
const dataUrl = (year) => {
  return `${baseUrl}${year}-dates/`
}

const search_by_year = (year) => {
  return fetch(dataUrl(year))
    .then(res => res.text())
    .then(body => {
      const data = []

      const $ = cheerio.load(body)
      $('.even, .odd').each((index, element) => {
        const elem = $(element)
        const tanggal = elem.find('td:first-child').text()
        const hari = elem.find('td:nth-child(2)').text()
        const keterangan = elem.find('td:last-child')
        const keterangan_hari = keterangan.text()

        const day = {
          tanggal: tanggal,
          hari: hari,
          keterangan_hari: keterangan_hari,
        }

        data.push(day)
      })
      return {
        data: data,
        total: data.length
      }
    })
}

module.exports = {
  search_by_year,
}
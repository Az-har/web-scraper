const axios =require('axios')
const cheerio =require('cheerio')
const express =require('express')
const PORT = 8000 
const url ='https://www.hindutamil.in/'

const app =express()
axios(url)
.then(response => {
    const html =  response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.fc-item__title', html).each(function () { //<-- cannot be a function expression
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title,
            url
        }) 
    })
    console.log(articles)
}).catch(err => console.log(err))



app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))



const http = require('http')    //Pull in a useful node package
                                //Try http.
const fs = require('fs')
const path = require('path')

const hostname = '127.0.0.1'    //Local host
const port = 3001               //Not assigned

const ingredients = [
    { name: 'heavy cream', amount: 1.5, unit: 'cup' },
    { name: 'whole milk', amount: 1.5, unit: 'cup' },
    { name: 'cane sugar', amount: 0.66, unit: 'cup' },
    { name: 'vanilla extract', amount: 2, unit: 'tsp' },
    { name: 'sea salt', amount: 0.125, unit: 'tsp' }
]

const usedIngredients = [ false, false, false, false, false ]

function getRandomIngredient() {
    if(usedIngredients.every(used => used)) {
        return null
    }

    let index = Math.floor(Math.random() * ingredients.length)

    while (usedIngredients[index]){
        index = (index + 1) % ingredients.length
    }

    usedIngredients[index] = true
    return { index: index, ingredient: ingredients[index] }
}

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {
      if (req.url !== '/') {      //Ignore favicon.ico and anything else
        res.statusCode = 404
        res.end()
        return
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')

      const result = getRandomIngredient()
      const template = fs.readFileSync(path.join(__dirname, 'response.html'), 'utf8')

      let content
      if (result) {
        const item = result.ingredient
        content = `Index ${result.index}: ${item.amount} ${item.unit} ${item.name}`
      } else {
        content = 'nothing left'
      }

      res.end(template.replace('Content', content))
    }
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})
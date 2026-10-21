const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
        res.write('<table>')
          res.write('<tr>')
            res.write('<th>New City</th>')
            res.write('<th>Reason</th>')
            res.write('<th>Distance from Favorite City</th>')
            res.write('<th>Cost of Travel</th>')
          res.write('</tr>')
          res.write('<tr>')
            res.write('<td>Paris</td>')
            res.write('<td>I really want to go to Paris because I want to visit some beautiful landmarks like the Eiffel Tower.</td>')
            res.write('<td>4,541 miles</td>')
            res.write('<td>$431</td>')
          res.write('</tr>')
          res.write('<tr>')
            res.write('<td>Los Angeles</td>')
            res.write('<td>I want to visit LA because there are lots of fun things to do. You can see lots of Hollywood landmarks and popular celebrities.</td>')
            res.write('<td>1,618 miles</td>')
            res.write('<td>$133</td>')
          res.write('</tr>')
          res.write('<tr>')
            res.write('<td>Corpus Christi</td>')
            res.write('<td>I want to visit Corpus Christi because it is a city in Texas that is right by the beach. My friend has family there and I think it would be fun to visit.</td>')
            res.write('<td>932 miles</td>')
            res.write('<td>$333</td>')
          res.write('</tr>')
          res.write('<tr>')
            res.write('<td>Sydney, Australia</td>')
            res.write('<td>I want to visit Sydney, Australia to experience the culture there and see landmarks like the Sydney Opera House.</td>')
            res.write('<td>8,842 miles</td>')
            res.write('<td>$544</td>')
          res.write('</tr>')
        res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})
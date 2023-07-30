
    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))

    

    app.get('/about', (req, res) => {
        res.send('This is data in about Page ')
       })

    

       app.get('/data1', (req, res) => {
        res.send({
            name : "nehal",
            age : 23,
            city : "Cairo"
        })
       })

       app.get('/data2', (req, res) => {
        res.send({
            name : "Islam",
            age : 26,
            city : "Mansoura"
        })
       })


    

    app.set('view engine', 'hbs');

      const viewsDirectory = path.join (__dirname , "../temp1/views" )
      app.set( "views" , viewsDirectory)

     

      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp1/partials")

      hbs.registerPartials(partialsPath)

      



      
      


    app.get('/' , (req , res) => {
        res.render('index' , {
            title: "HOME",
            desc : "WELCOM IN Home Page"
            
        })
    })

    app.get('/service' , (req , res) => {
        res.render('service' , {
            title : "SERVICE",
            name : "WE CAN HELP YOUTO KNOW THE WEATHER ",
            city: "We provide our services 24 hours a day",
            
            img1 : "images/SER.jpg"
        })
    })

    app.get('/team' , (req , res) => {
        res.render('team' , {
            title : "THE WEATHER",
            name : "EGYPT",
            city: " 76.5738807",
            age: " 9.0735648 ",
        
            img2 : "images/weather.jpg"
        })
    })


    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
 
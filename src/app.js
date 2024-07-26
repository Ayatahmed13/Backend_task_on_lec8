

 const express = require('express')
 const app = express()

 const port = process.env.PORT || 3000

    
 const path = require ("path")
 const publicDir =  path.join(__dirname , '../public')
 app.use (express.static (publicDir))


    

app.set('view engine', 'hbs');

 const viewsDir = path.join (__dirname , '../Temp/views')
 app.set('views', viewsDir);

 
 var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../Temp/partials")
hbs.registerPartials(partialsPath)

 
app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "Home",
        desc : "This is home page"
    })
})



app.get ('/about' , (req,res) => {
    res.render('about' , {
        title : "about",
        desc : "An about page",
    })
})



app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "Service",
        name: "Ayat",
        city:"Cairo",
        
        
    })

})

app.get ('/contact' , (req,res) => {
    res.render('contact' , {
        title : "contact",
        desc:"New contact page",
        name: "Ayat",
        age:"22"
        
        
    })
})


app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "TEAM",
        name: "Ayat Ahmed",
        city:"cairo",
        age: 22,
       
    })
})

 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
 })
    




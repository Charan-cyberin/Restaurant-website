const express = require("express")
const cors = require("cors")
const path = require("path")
const LogInCollection = require("./mongo")
const hbs = require("hbs")
const app = express()


const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)


app.get('/signup',cors(), (req, res) => {
    res.render('signup')
})
app.get('/',cors(), (req, res) => {
    res.render('login')
})



 app.get('/home',cors(), (req, res) => {
     res.render('home')
 })

app.post('/signup', async (req, res) => {
    
     const data = new LogInCollection({
         name: req.body.name,
         password: req.body.password
     })
     await data.save()

    //const data = {
        //name: req.body.name,
      //  password: req.body.password
    //}

    const checking = await LogInCollection.findOne({ name: req.body.name })

   try{
    if (checking.name === req.body.name && checking.password===req.body.password) {
        res.send("user details already exists")
    }
    else{
        await LogInCollection.insertMany([data])
    }
   }
   catch{
    res.send("wrong inputs")
   }

    res.status(201).render("home", {
        naming: req.body.name
    })
})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})



app.listen(port, () => {
    console.log('port connected');
})
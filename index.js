const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()
require('dotenv').config()



const session = require('express-session')
const connectFlash = require('connect-flash')
const cookieParser = require('cookie-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(connectFlash())
app.use(cookieParser('secret'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}))

const db = require("./models");
const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const userRoutes =require("./routes/user.routes");
const masterRoute = require("./routes/master.routes")
const stokbarangRoute = require("./routes/stokbarang.routes")
const reportsRoute = require("./routes/report.routes")

app.use(express.urlencoded({
    extended: false
}))
app.use("/public", express.static(__dirname + "/public"));
app.set('view engine', 'ejs')
app.set('views', './view')


app.use("/", authRoutes);
app.use("/",dashboardRoutes)
app.use("/",userRoutes)
app.use("/master",masterRoute)
app.use("/stokbarang",stokbarangRoute)
app.use("/reports",reportsRoute)


app.get("/logout", function(req, res) {
    req.session.destroy(() => {
    //  req.logout();
     res.redirect("/"); //Inside a callback… bulletproof!
    });
   });
// db.sequelize.sync()
//    .then(() => {
//      console.log("Database synced successfully.");
//    })
//    .catch((err) => {
//      console.log("Failed to sync database: " + err.message);
//    });


//handle 404 
app.get('*', (req, res) => {
    res.status(404).render('404');
})

app.get('/', (req, res) => {

    res.send('hello from simple server :)')

})


app.listen(process.env.PORT, () => console.log('> Server is up and running on port : ' + process.env.PORT))
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const URI = process.env.MONGODB_URI;
require("dotenv").config();
const { dbConnected } = require("./src/db/db.js");
const app = express();


const wardRoutes =require("./src/routes/wards.routes");
const authRouthes =require("./src/routes/auth.routes");
const floodRoutes =require("./src/routes/flood.routes");
const weatherRoutes =require("./src/routes/weather.routes");
const ward_risk =require("./src/routes/ward_risk.routes");
const public_complaint =require("./src/app/routes/complaint.route.js");



dbConnected(process.env.MONGODB_URI);



app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());
app.use(cookieParser());



app.use("/api", wardRoutes);
app.use("/api/auth", authRouthes);
app.use("/api/flood", floodRoutes);
app.use("/api/rain", weatherRoutes);  // ward-wise rain data
app.use("/api/wards", ward_risk);
app.use("/api/complaints", public_complaint);




app.get('/',(req,res)=>{
    res.send('app is listening')
})



app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on all interfaces");
});

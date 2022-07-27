const express = require("express");
const app = express();
const conn =require("./db");
const PORT = 4000;
const cors = require("cors")




// app.get( "/:userId", (req , res) => {
//     const userNo = req.params.userId;
//     res.send(`Hello ${userNo}`)

// })

app.use(cors())
app.use(express.json());
app.get("./user");
app.use("/user", require("./Routes/User"));


conn.connection.on("connected", (err) => {
    if(err){
        console.error(err);
    }else{
        console.log("connected  To MongoDB");
    }
})




// create Express Server //
app.listen(PORT, () => {
    console.log("server is started");
})
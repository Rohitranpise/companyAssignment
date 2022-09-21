const express = require("express")
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const cors = require("cors")
const categoryRoute = require("./app/routes/category.routes");
const productRoute = require("./app/routes/product.routes")
app.use(cors())



app.get("/", (req, res) => {
    console.log(`welcome to app`)
});

mongoose.connect("mongodb://localhost:27017/products", {
    useUnifiedTopology: true
}).then(() => {
    console.log(`connected to database successfully!`)
}).catch((err) => {
    console.log(err)
});

app.use(express.json())

app.use("/app", categoryRoute)
app.use("/app", productRoute)

app.listen(PORT, () => { console.log(`app is running on the port ${PORT}`) })
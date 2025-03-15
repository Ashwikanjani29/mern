require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = require("./db"); 

app.get("/", (req, res) => {
    res.send("Food Delivery API is running!");
});

const authRoutes = require("./routes/auth");
const restaurantRoutes = require("./routes/restaurants");
const orderRoutes = require("./routes/orders");

app.use("/auth", authRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

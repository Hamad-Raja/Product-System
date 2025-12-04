const express = require("express");
const productRoutes =require("./routes/productRoutes")
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRoutes);

app.use("/api", productRoutes);

// app.use((req, res) => {
//     res.status(404).json({ error: "Route not found" });
// });

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

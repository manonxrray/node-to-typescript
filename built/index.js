"use strict";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const wilderController = require("./controllers/wilder");
const app = express();
mongoose
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
})
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello woooorld");
});
app.post("/api/wilder/create", wilderController.create);
app.put("/api/wilder/update", wilderController.update);
app.delete("/api/wilder/delete", wilderController.delete);
app.get("/api/wilder/read", wilderController.read);
app.listen(5000, () => console.log("Server started on localhost:5000"));
//# sourceMappingURL=index.js.map
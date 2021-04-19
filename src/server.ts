import express, { Request, Response, NextFunction } from "express";

const mongoose = require("mongoose");
const cors = require("cors");
const wilderController = require("./controllers/wilder");

const app = express();

// Mongoose connection

mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err: any) => console.log(err));

// Different uses

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Typescript introduction

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.name === "MongoError" && error.code === 11000) {
    res.status(400);
    res.json({ success: false, message: "The name is already used" });
  }
})


// Different requests

app.get("/", (req: Request, res: Response) => {
  res.send("Hello woooorld");
});

app.post("/api/wilder/create", wilderController.create);

app.put("/api/wilder/update", wilderController.update);

app.delete("/api/wilder/delete", wilderController.delete);

app.get("/api/wilder/read", wilderController.read);

// Server listening

app.listen(5000, () => console.log("Server started on localhost:5000"));

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const api = require("./lib/API");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use("/api", api);

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
})

//Need to register the wild card last so that more specific routes are used first.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})

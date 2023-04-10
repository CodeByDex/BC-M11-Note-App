const api = require("express").Router();
const IO = require("./IO");

api.get("/", (req, res) => {
    console.log("API Get Request");
    res.json("No API Implemented Here.")
})

api.get("/notes", (req, res) => {
    res.json(IO.GetNotes());
})

api.post("/notes", (req, res) => {
    let {title, text} = req.body;

    res.json(IO.AddNote(title, text));
})

api.delete("/notes/:id", (req, res) => {
    let id = req.params.id;

    if (id) {
        let succ = IO.DeleteNote(id);
        if (succ) {
            res.status(200).send();
        } else {
            res.status(404).send(`Delete for ${id} Unsuccessful`)
        }
    } else {
        res.status(400).send("ID Required");
    }
})

module.exports = api;
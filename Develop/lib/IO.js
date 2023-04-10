const fs = require("fs");

function GetNotes(){
     return JSON.parse(fs.readFileSync("./db/db.json"));
}

function AddNote(title, text) {
    let notes = GetNotes();
    notes.push({
        title: title,
        text: text,
        id: (notes.length + 1).toString()
    });

    SaveNotes(notes);
}

function DeleteNote(id) {
    let notes = GetNotes();

    let index = notes.findIndex(x => x.id === id);

    if (index != -1){
        notes.splice(index, 1);
        SaveNotes(notes);
        return true;
    } else {
        return false;
    }
}

function SaveNotes(notes) {
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
}

module.exports = {
    GetNotes: GetNotes,
    AddNote: AddNote,
    DeleteNote: DeleteNote
}
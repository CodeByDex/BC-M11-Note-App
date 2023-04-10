let notes = [{
    title: "title 1",
    text: "Text 1",
    id: "1"
  },{
    title: "title 2",
    text: "text 2",
    id: "2"
  }];


function GetNotes(){
     return notes
}

function AddNote(title, text) {
    notes.push({
        title: title,
        text: text,
        id: (notes.length + 1).toString()
    })
}

function DeleteNote(id) {
    let index = notes.findIndex(x => x.id === id);

    if (index != -1){
        notes.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

module.exports = {
    GetNotes: GetNotes,
    AddNote: AddNote,
    DeleteNote: DeleteNote
}
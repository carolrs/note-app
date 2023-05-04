const NotesModel = require('./notesModel')
const View = require('./notesView')

const model = new NotesModel()

// model.addNotes('test123')
// model.addNotes('adding more notes')
// model.addNotes('testing notes 1234567')

const view = new View(model)
view.displayNotes()

//console.log(model.getNotes());
//console.log('teste');

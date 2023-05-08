const NotesClient = require('./notesCliente')
const NotesModel = require('./notesModel')
const View = require('./notesView')

const model = new NotesModel()
const cliente = new NotesClient()


const view = new View(model, cliente)
//view.displayNotes()

view.displayNotesFromApi();

//console.log(model.getNotes());
//console.log('teste');

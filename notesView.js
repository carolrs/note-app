class View {
  constructor(notesModel, notesClient) {

    this.notesModel = notesModel
    this.notesClient = notesClient

    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#message-button');

    console.log(this.buttonEl)
    this.buttonEl.addEventListener('click', () => {
      const noteInput = document.querySelector('#message-input').value

      this.addNewNote(noteInput)
   });
  }
  

  displayNotes(){

    document.querySelectorAll('div.note').forEach(note=>{
      note.remove()
    })

      this.notesModel.getNotes().forEach(note => {
        const newNote = document.createElement('div');
        newNote.textContent = note;
        newNote.className = 'note'

        this.mainContainerEl.append(newNote)
      
    });
  }

  addNewNote(note) {
    this.notesModel.reset()
    this.notesClient.add(note, () => {
      this.displayNotesFromApi()
    })
  }

  displayNotesFromApi() {
    return this.notesClient.loadNotes((data) => {
      this.notesModel.setNotes(data)
      this.displayNotes()
    })
  }
}

module.exports = View;

class View {
  constructor(notesModel) {

    this.notes = notesModel

    this.buttonEl = document.querySelector('#message-button');

    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
      const noteInput = document.querySelector('#message-input').value
      this.addNewNote(noteInput)
   });
    }

  displayNotes(){

    document.querySelectorAll('div.note').forEach(note=>{
      note.remove()
    })

      this.notes.getNotes().forEach(note => {
        const newNote = document.createElement('div');
        const element = document.querySelector('#message-input');
        newNote.textContent = note;
        newNote.className = 'note'

        console.log(newNote)

        newNote.innerText = element.value
        this.mainContainerEl.append(newNote)
      
    });
  }

  addNewNote(note){
    this.notes.reset()
    this.notes.addNotes(note)
    this.displayNotes()
  }
}

module.exports = View;
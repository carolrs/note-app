class NotesModel{
  constructor(){
    this.notes = []
  }

  getNotes(){
    return this.notes
  }
  addNotes(note){
    return this.notes.push(note)
  }
  setNotes(note){
    this.notes = note
  }
 
  reset(){
    return this.notes = []
  }
}
module.exports = NotesModel;
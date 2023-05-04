const NotesModel = require('./notesModel')

describe('notesModel',()=>{
  it('should shows a list of notes',()=>{
    const model = new NotesModel()
    expect(model.getNotes()).toEqual([])
  })

  it('should adds a note',()=>{
    const model = new NotesModel()
    model.addNotes("John's party friday at 7:00")
    expect(model.getNotes()).toEqual(["John's party friday at 7:00"])
  })

  it('should reset notes',()=>{
    const model = new NotesModel()
    model.addNotes("John's party friday at 7:00")
    model.reset()
    expect(model.getNotes()).toEqual([])
  })
})
/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const View = require('./notesView');
const NotesModel = require('./notesModel');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel()
    const view = new View(model);
    view.displayNotes()

    expect(document.querySelectorAll('div').length).toBe(1);
  });

  it('adds and show new note',()=>{
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel()
    const view = new View(model);

    model.addNotes('testing my notes')
    view.displayNotes(model)
    expect(document.querySelectorAll('div').length).toBe(2);

  })

  it('adding more notes',()=>{
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel()
    const view = new View(model);

    model.addNotes('testing my notes')
    model.addNotes('testing my notes 123')
    model.addNotes('testing my notes 12345')
    view.displayNotes(model)
    expect(document.querySelectorAll('div.note').length).toBe(3);

  })

});

describe('NotesView', () => {
  it('clicks the button to add a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel()
    const view = new View(model);

    const inputNote = document.querySelector('#message-input')

    inputNote.value = 'Doctor Appointment friday at 2:00'

    expect(document.querySelector('#message-input').value).toEqual('Doctor Appointment friday at 2:00');

    const buttonEl = document.querySelector('#message-button')
    buttonEl.click();

    expect(document.querySelector('#message-input')).not.toBeNull();
    expect(document.querySelectorAll('#message-input').length).toEqual(1);
  });

  it('return the right length when displayNotes is called twice', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel()
    const view = new View(model);

    model.addNotes('going to supermarket at 3:00')
    model.addNotes('going to the dorct at 4:00')

    console.log(model)

    view.displayNotes()
    view.displayNotes()
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
})
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNotes(note) {
          return this.notes.push(note);
        }
        reset() {
          return this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var View2 = class {
        constructor(notesModel) {
          this.notes = notesModel;
          this.buttonEl = document.querySelector("#message-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl.addEventListener("click", () => {
            const noteInput = document.querySelector("#message-input").value;
            this.addNewNote(noteInput);
          });
        }
        displayNotes() {
          document.querySelectorAll("div.note").forEach((note) => {
            note.remove();
          });
          this.notes.getNotes().forEach((note) => {
            const newNote = document.createElement("div");
            const element = document.querySelector("#message-input");
            newNote.textContent = note;
            newNote.className = "note";
            console.log(newNote);
            newNote.innerText = element.value;
            this.mainContainerEl.append(newNote);
          });
        }
        addNewNote(note) {
          this.notes.reset();
          this.notes.addNotes(note);
          this.displayNotes();
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var View = require_notesView();
  var model = new NotesModel();
  var view = new View(model);
  view.displayNotes();
})();

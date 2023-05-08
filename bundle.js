(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesCliente.js
  var require_notesCliente = __commonJS({
    "notesCliente.js"(exports, module) {
      var NotesClient2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        add(note, callback) {
          console.log("Meu note: ", note);
          const data = {
            "content": note
          };
          fetch("http://localhost:3000/notes", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(() => {
            callback();
          });
        }
      };
      module.exports = NotesClient2;
    }
  });

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
        setNotes(note) {
          this.notes = note;
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
        constructor(notesModel, notesClient) {
          this.notesModel = notesModel;
          this.notesClient = notesClient;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#message-button");
          console.log(this.buttonEl);
          this.buttonEl.addEventListener("click", () => {
            const noteInput = document.querySelector("#message-input").value;
            this.addNewNote(noteInput);
          });
        }
        displayNotes() {
          document.querySelectorAll("div.note").forEach((note) => {
            note.remove();
          });
          this.notesModel.getNotes().forEach((note) => {
            const newNote = document.createElement("div");
            newNote.textContent = note;
            newNote.className = "note";
            this.mainContainerEl.append(newNote);
          });
        }
        addNewNote(note) {
          this.notesModel.reset();
          this.notesClient.add(note, () => {
            this.displayNotesFromApi();
          });
        }
        displayNotesFromApi() {
          return this.notesClient.loadNotes((data) => {
            this.notesModel.setNotes(data);
            this.displayNotes();
          });
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var NotesClient = require_notesCliente();
  var NotesModel = require_notesModel();
  var View = require_notesView();
  var model = new NotesModel();
  var cliente = new NotesClient();
  var view = new View(model, cliente);
  view.displayNotesFromApi();
})();

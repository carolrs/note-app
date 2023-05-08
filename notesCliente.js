class NotesClient{

  loadNotes(callback){
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => {
         callback(data)
      });
  }

  add(note, callback) {
    console.log("Meu note: ", note)
    const data = {
      "content": note
    }
    fetch('http://localhost:3000/notes', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      callback()
    });

  }

}

module.exports = NotesClient
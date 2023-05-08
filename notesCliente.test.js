/**
 * @jest-environment jsdom
 */

const Client = require('./notesCliente');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads data',(done)=>{
 
    const client = new Client()

    fetch.mockResponseOnce(
      JSON.stringify(
        ["testing note from api"]
      )
    );
    
    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi).toContain(
        "testing note from api"
      );

      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3000/notes'
      );
      done();
    });
  })
})

// const mockModel = {
//   notes: [],
//   getNotes: () => ["My First Note"],
//   setNotes: ((notes) => { notes = ["Changed list"]} )
// };

    // const mockClient = {
    //   loadNotes : ((callback) => {
    //     return fetch('fakeURL')
    //       .then((response) => response.json())
    //       .then((data) => callback(data));
    //   })
    // };
    // const view = new View(mockModel, mockClient);
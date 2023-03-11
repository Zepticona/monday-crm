const fetch = require('node-fetch');
require('dotenv').config();
// const data = require('./data.js')

/*  ///// String literal for creating a status column with detault labels and colors.

const query = `mutation {create_column (board_id: 4041707061, title: "Dhonchikaong", column_type: status, defaults: ${JSON.stringify(JSON.stringify({"labels": {"0": "Working On it", "1": "Testing"}
}))} ) {id}}`;

*/





// Loop over each column array, and create that column.
function createMultipleColumns () {
  
  // Refer to Monday.com API Documentations for available column types.
  // const data = [
  //   {
  //     title: "TESTING 3",
  //     type: "file"
  //   },    
  //   {
  //     title: "TESTING 4",
  //     type: "status",
  //     labels:  {
  //         "3": "New",
  //         "4": "Repeat"
  //     }
  // },
    
  // ]
  // Making multiple column creation requests after each one completes
  let promise = Promise.resolve();
  data.forEach((col) => {
    // let query;
    // query = `mutation {create_column (board_id: 4107774784, title: "${col.title}", column_type: ${col.type}) {id}}`;
    // if(col.type==='status') {
    //   const stringLabels = 
    //   query = `mutation {create_column (board_id: 4041707061, title: "Dhonchikaong", column_type: status, defaults: ${JSON.stringify(JSON.stringify({"labels": {"3": "Working On it", "4": "Testing"}
    // }))} ) {id}}`
    // console.log(query);
    // }
    promise = promise.then(() => fetch ("https://api.monday.com/v2",{
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          'Authorization' : process.env.API_KEY
      },
      body: JSON.stringify({
          'query' : `mutation {create_column (board_id: 1164241537, title: "${col.title}", column_type: ${col.type}) {id}}`
      })
      }))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  });
}
createMultipleColumns();

async function getRecord (itemID) {
  try {    
    // let query = "query { items (ids: [4100932279]) { name  }}";
    // let query = "query {boards (ids: 3923409518) {owner{ id }  columns {   title   type }}}";
    // let query = "query {boards (ids: 3923409518) {owner{ id } items(ids: [4100932279]){column_values {   id   }} }}";
    let query = "query { boards(ids: [3923409518]) { id name items(ids: [4100932279]) { column_values{text} }} }";
    const res = await fetch ("https://api.monday.com/v2", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : process.env.API_KEY
       },
       body: JSON.stringify({
         query : query
       })
      });
    const data = await res.json();
    // people.filter(person => String(person.year).startsWith('198'))
    const x = data.data.boards[0].items[0].column_values.filter( val => String(val.text).startsWith('Swift'))[0];
    console.log(x.text);

  } catch(err) {

    console.log(err);
  }
}

const fetch = require('node-fetch');
require('dotenv').config();


/*  ///// String literal for creating a status column with detault labels and colors.

const query = `mutation {create_column (board_id: 4041707061, title: "Dhonchikaong", column_type: status, defaults: ${JSON.stringify(JSON.stringify({"labels": {"0": "Working On it", "1": "Testing"}
}))} ) {id}}`;

*/


// Making multiple column creation requests after each one completes

// Refer to Monday.com API Documentations for available column types.
const data = [
    {
        title: "Field Title/Lable",
        type: "column types"
    },
    {
        title: "Field Title/Lable",
        type: "column types"
    }
]

// Loop over each column array, and create that column.
let promise = Promise.resolve();
data.forEach((col) => {
  promise = promise.then(() => fetch ("https://api.monday.com/v2",{
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : process.env.API_KEY
    },
    body: JSON.stringify({
        'query' : `mutation {create_column (board_id: 4041707061, title: "${col.title}", column_type: ${col.type}) {id}}`
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

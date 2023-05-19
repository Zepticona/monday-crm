const fetch = require('node-fetch');
require('dotenv').config();
const data = require('./data.js')
const {accounts} = require('./parkview.js');
const fs = require('fs');
const rows = require('./data2.js');
console.log(rows[0]["What type of moment is this project?"])

/*  ///// String literal for creating a status column with detault labels and colors.

const query = `mutation {create_column (board_id: 4041707061, title: "Dhonchikaong", column_type: status, defaults: ${JSON.stringify(JSON.stringify({"labels": {"0": "Working On it", "1": "Testing"}
}))} ) {id}}`;
*/





// Loop over each column array, and create that column.
function createMultipleColumns () {
  
  // Refer to Monday.com API Documentations for available column types.
  // const data = [
  //   {
  //     title: "Direct Participants - No. Boys",
  //     type: "numbers"
  //   }    
  // ]


  // Making multiple column creation requests after each one completes
  
  let promise = Promise.resolve();
  data.data.forEach((col) => {
    let query;
    query = `mutation {create_column (board_id: 1164416820, title: "${col.title}", column_type: ${col.type}) {id}}`;
    if(col.type==='status' && col.labels) {
      query = `mutation {create_column (board_id: 1164416820, title: "${col.title}", column_type: status, defaults: ${JSON.stringify(JSON.stringify({"labels": col.labels}))}) {id}}`
    }

    const object = {
      "long_text": "This is describing your project, call to action, etc."
    }

    const newQuery = `mutation { create_item(board_id: ${1164434859}, group_id: "new_group85574", item_name: "test2", column_values: ${JSON.stringify(JSON.stringify(object))}){ id } }`
    console.log(newQuery);
    // promise = promise.then(() => fetch ("https://api.monday.com/v2",{
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization' : process.env.MIND_API_KEY
    //   },
    //   body: JSON.stringify({
    //       'query' : query
    //   })
    //   }))
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
  });
}

async function getRecord (itemID) {
  try {    
    // let query = "query { items (ids: [4100932279]) { name  }}";
    
    // let query = "query {boards (ids: 1164434859) {owner{ id }  columns {   title   type id}}}";
    let query = "query {boards (ids: 1164434859) { groups { title id }}}";

    // let query = "query {boards (ids: 3923409518) {owner{ id } items(ids: [4100932279]){column_values {   id   }} }}";
    // let query = "query { boards(ids: [1164241537]) { id name items(ids: [3908960320]) { column_values{} }} }";
    const res = await fetch ("https://api.monday.com/v2", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : process.env.MIND_API_KEY
       },
       body: JSON.stringify({
         query : query
       })
      });
    const data = await res.json();
    // console.log(data.data.boards[0].columns.length)
    // people.filter(person => String(person.year).startsWith('198'))
    // const x = data.data.boards[0].items[0].column_values.filter( val => String(val.text).startsWith('Swift'))[0];
    console.log(JSON.stringify(data, null, 2));
    // console.log(data.data.boards[0].columns.forEach);
    // const dataColumnIds = data.data.boards[0].columns.filter(column => {
    //   return column.type === "date"
    // });
    // const dateF = dataColumnIds.filter(dateFiled => dateFiled.title.startsWith("Date ")).map(col => col.id);

    // console.log(dateF);
    // const content = dataColumnIds;
    // console.log(content)

    // fs.writeFile('./test.txt', content, err => {
    //   if (err) {
    //     console.error(err);
    //   }
    //   // file written successfully
    // });


  } catch(err) {

    console.log(err);
  }
};

async function deleteRecords () {
  try {
    let promise = Promise.resolve();
    const dateIds = ['date59',  'date3',
    'date33',  'date05',  'date199', 'date77',
    'date03',  'date83',  'date27',  'date68',
    'date835', 'date11',  'date66',  'date563',
    'date9',   'date196', 'date97',  'date57',
    'date772', 'date36',  'date01',  'date09',
    'date02',  'date82',  'date12',  'date020',
    'date07',  'date522', 'date79',  'date37',
    'date220', 'date565', 'date198', 'date54',
    'date45',  'date21',  'date776', 'date591',
    'date847', 'date028', 'date796', 'date81',
    'date51',  'date979', 'date688', 'date35',
    'date572', 'date24',  'date568', 'date599',
    'date48',  'date41'];

    dateIds.forEach((dateID) => {
      const query  = `mutation { delete_column(board_id: 1164241537, column_id: ${dateID}) {id}}`;;     
  
      promise = promise.then(() => fetch ("https://api.monday.com/v2",{
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : process.env.MIND_API_KEY
        },
        body: JSON.stringify({
            'query' : query
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
    
  } catch(err) {
    console.log(err);
  }
}

async function createItem() {
 
  let promise = Promise.resolve();
  rows.forEach((row) => {
    const object = {
      "text": row["Project Name"],      
      "long_text": row["Describe your project, call to action and objective"],
      "dropdown1": row["Select the central strategic pillar that this activity links to"] ? {
        "labels": [row["Select the central strategic pillar that this activity links to"]]
      } : "",
      "status4": row["What type of moment is this project?"],
      "long_text80": row["What is your key message?"],
      "sp___campaign_lead": row["Project Lead"],
      "sp___campaign_team": row["Team/Department"],
      "target_audience": {
        "labels": ["External Audience"]
      },
      "dropdown6": {
        "labels": ["Other"]
      }
    }

    const newQuery = `mutation { create_item(board_id: ${1164434859}, group_id: "new_group85574", item_name: "${row["Project Name"]}", column_values: ${JSON.stringify(JSON.stringify(object))}){ id } }`
    // console.log(newQuery);
    promise = promise.then(() => fetch ("https://api.monday.com/v2",{
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : process.env.MIND_API_KEY
      },
      body: JSON.stringify({
          'query' : newQuery
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

async function updateItems() {
   
  let promise = Promise.resolve();
  rows.forEach((row) => {
    const object = {
      "text": row["Project Name"],      
      "long_text": row["Describe your project, call to action and objective"],
      "dropdown1": row["Select the central strategic pillar that this activity links to"] ? {
        "labels": [row["Select the central strategic pillar that this activity links to"]]
      } : "",
      "status4": row["What type of moment is this project?"],
      "long_text80": row["What is your key message?"],
      "sp___campaign_lead": row["Project Lead"],
      "sp___campaign_team": row["Team/Department"],
      "target_audience": {
        "labels": ["External Audience"]
      },
      "dropdown6": {
        "labels": ["Other"]
      }
    }
    `mutation changeValues($board_id: Int!, $item_id: Int, $column_id: String!, $value: JSON!) {
      change_column_value (board_id: $board_id, item_id: $item_id , column_id: $column_id, value: $value) {
        id
      } 
    }`
    const newQuery = `mutation { create_item(board_id: ${1164434859}, group_id: "new_group85574", item_name: "${row["Project Name"]}", column_values: ${JSON.stringify(JSON.stringify(object))}){ id } }`
    // console.log(newQuery);
    promise = promise.then(() => fetch ("https://api.monday.com/v2",{
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : process.env.MIND_API_KEY
      },
      body: JSON.stringify({
          'query' : newQuery
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

// createMultipleColumns();
// getRecord('x');
// deleteRecords();
createItem();


const fetch = require('node-fetch');
require('dotenv').config();

async function getColumnIDs(boardID) {
    try {
        let query = `query {boards (ids: ${boardID}) {owner{ id }  columns {   title   type id}}}`;
        const res = await fetch("https://api.monday.com/v2", {
            method: 'poar',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : process.env.MIND_API_KEY
            },
            body: JSON.stringify({
                query : query
            })
        });
        const data = await res.json();
        console.log("The Column informations are ---------------------");
        console.log(JSON.stringify(data, null, 2));

    } catch(err) {
        console.log(err)
    }
}

// Loop over each column array, and create that column.
function createItems () {

  const variables = ({
    boardId : 00000000,
    groupId: "new_group",
    itemName : "New Item",
    columnValues: JSON.stringify({
        people78: { 
            personsAndTeams: [
            {
                id: 00000000, 
                kind: "person"
            }
            ] 
        },
        text7: "Yosemite Sam",
        dropdown: {
            labels: [
            "TAM"
            ]
        },
    })
});


// const query = `mutation create_item ($boardId: Int!, $groupId: String!, $itemName: String!, $columnValues: JSON!) { 
//     create_item (
//         board_id: $boardId,
//         group_id: $groupId,
//         item_name: $itemName, 
//         column_values: $columnValues
//     ) 
//     { 
//         id
//     } 
// }`;
  
  
    // Making multiple column creation requests after each one completes
    
    let promise = Promise.resolve();
    [1].forEach((col) => {
    //   let query = "mutation { create_item (board_id: 1164434859, group_id: \"new_group85574\", item_name: \"new item\") { id }}";
    // var query = `mutation { create_item(board_id: ${1164434859}, group_id: "new_group85574", item_name: "test2", column_values: "{\"edit_request\" : \"New text\"}"){ id } }`
    // ${JSON.stringify(JSON.stringify({"labels": col.labels}))}
    const object = {
        "long_text": "This is describing your project, call to action, etc."
    }

    var query = `mutation { create_item(board_id: ${1164434859}, group_id: "new_group85574", item_name: "test2", column_values: ${JSON.stringify(JSON.stringify(object))}){ id } }`
    console.log(query);
  
    //   promise = promise.then(() => fetch ("https://api.monday.com/v2",{
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization' : process.env.MIND_API_KEY
    //     },
    //     body: JSON.stringify({
    //         'query' : query
    //     })
    //     }))
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    });
  }

getColumnIDs(1164434859);
const API_KEY = process.env.LIQUASIL_API_KEY;
const BOARD_ID = '123456789';
const FIELD_IDS = 'text_column,numbers_column,date_column'; // comma-separated field IDs

fetch(`https://api.monday.com/v2?query={items(board_id:${3179056139}){name,column_values(ids:[${FIELD_IDS}]){id,value}}}`,
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

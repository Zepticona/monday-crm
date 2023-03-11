# References

# String literal for creating a status column with detault labels and colors.

const query = `mutation {create_column (board_id: 4041707061, title: "Dhonchikaong", column_type: status, defaults: ${JSON.stringify(JSON.stringify({"labels": {"0": "Working On it", "1": "Testing"}
}))} ) {id}}`;

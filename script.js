let rowCount = 1;

function addToTable() {
    // Get the input values
    let expenseValue = document.getElementById("expense").value;
    let amountValue = document.getElementById("amount").value;

    // Get the current date and time
    let currentDate = new Date();
    let timestamp = currentDate.toLocaleString();

    // Get the table body
    let tableBody = document.getElementById("expenseTable").getElementsByTagName('tbody')[0];

    // Create a new row
    let newRow = tableBody.insertRow(tableBody.rows.length);

    // Insert cells in the row
    let srNoCell = newRow.insertCell(0);
    let expenseCell = newRow.insertCell(1);
    let amountCell = newRow.insertCell(2);
    let timestampCell = newRow.insertCell(3);

    // Set values for the cells
    srNoCell.appendChild(document.createTextNode(rowCount));
    expenseCell.appendChild(document.createTextNode(expenseValue));
    amountCell.appendChild(document.createTextNode(amountValue));
    timestampCell.appendChild(document.createTextNode(timestamp));

    // Increment the row count for the next entry
    rowCount++;
}
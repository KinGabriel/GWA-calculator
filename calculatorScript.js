function addRow() {
    let table = document.getElementById("calculatorTable");
    let row = table.insertRow(-1); 
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    c1.innerHTML = `<td><input class="subjects" type="text" placeholder="Enter Subject"></td>`;
    c2.innerHTML = ` <td><input class="units" type="number" placeholder="Units"></td>`;
    c3.innerHTML = ` <td><input class="grades" type="number" placeholder="Grade"></td>`;
 }

 function removeRow() {
    let table = document.getElementById("calculatorTable");
    let rowCount = table.rows.length;
    if (rowCount > 2) { 
        table.deleteRow(-1); 
    } else {
        document.getElementById("result").innerText ="You cannot delete the last row";
    }
 }
 
 function calculateGWA() {
    let units = document.getElementsByClassName("units");
    let grades = document.getElementsByClassName("grades");
    let totalUnits = 0;
    let weightedSum = 0;
    for (let i = 0; i < units.length; i++) {
        let unit = parseFloat(units[i].value);
        let grade = parseFloat(grades[i].value);
        if (!isNaN(unit) && !isNaN(grade)) {
            totalUnits += unit;
            weightedSum += unit * grade;
        }
    }
    if (totalUnits > 0) {
        let gwa = weightedSum / totalUnits;
        document.getElementById("result").innerText = `Your GWA is: ${gwa.toFixed(4)}`;
    } else {
        document.getElementById("result").innerText = "Please enter valid values for all fields.";
    }
}
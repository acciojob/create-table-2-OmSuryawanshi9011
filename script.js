function createTable() {
let rn = prompt('Input number of rows');
    let cn = prompt('Input number of columns');
    let table = document.getElementById('myTable');
    for(let i=0; i<rn; i++){
        let row = table.insertRow(i);
        for(let j=0; j<cn; j++){
            let cell = row.insertCell(j);
            cell.innerHTML = 'Row-'+i+' Column-'+j;
        }
    }
}


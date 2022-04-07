function myFunction() {
    var table = document.getElementById("one");
    var row = table.insertRow(5);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<td><label>Rua :</label></td>";
    cell2.innerHTML = "<td><input type='text' name='rua' id='rua' size='40' disabled/></td>";
    var row = table.insertRow(6);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<td><label>Número :</label></td>"
    cell2.innerHTML = "<td><input type='text' name='rua_numero' id='rua_numero' autocomplete='off' size='20' requered/></td>"

    var row = table.insertRow(7);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<td><label>Complemento :</label></label></td>"
    cell2.innerHTML = "<td><input type='text' name='rua_numero_complemento' id='rua_numero_complemento' autocomplete='off' size='20' /></td>"

    var row = table.insertRow(8);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<td> <label>Bairro :</label></td >";
    cell2.innerHTML = "<td><input type='text' name='bairro' id='bairro' size='40' disabled /></td>";

    var row = table.insertRow(9);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<td><label>Cidade :</label></td>";
    cell2.innerHTML = "<td> <input type='text' name='cidade' id='cidade' size='40' disabled /></td>";

    var row = table.insertRow(10);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<td><label>Estado :</label></td>";
    cell2.innerHTML = "<td><input type='text' name='uf' id='uf' size='2' disabled /></td>";

    document.getElementById('butassin').disabled = false;
}


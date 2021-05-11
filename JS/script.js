for (let i = 2; i < 22; i++, i++) {
    let table = 
    `<tr>
        <th scope="row"> ${i}</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>`;
    
    document.getElementById("tabla_valores").innerHTML += table;
    
    }
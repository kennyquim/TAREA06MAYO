function imprimir(){
 for (let i = 2; i < 22; i++, i++) {
    let table = 
    `<tr>
        <th scope="row"> ${i}</th>
        <td>Marcos</td>
        <td>Medellin</td>
        <td>3875698421</td>
      </tr>`;
    
    document.getElementById("tabla_valores").innerHTML += table;
  }
}
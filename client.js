      // Display each of the pets on the DOM.
  for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    $('#tableBody').append('<tr> <td>' + element.name + '</td> <td>' + element.type + '</td> <td>' + element.age +'</td>  </tr>');
  
  }
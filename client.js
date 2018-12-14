class Pet {
    constructor(nameIn, typeIn, ageIn) {
      this.name = nameIn;
      this.age = ageIn;
      this.type = typeIn;
    }
  }
  
  // Feel free to add more data here
  const petOne = new Pet('Charlie', 'dog', 6);
  const petTwo = new Pet('Thorin', 'rabbit', 4);
  const petThree = new Pet('Cedar', 'dog', 7);
  const petFour = new Pet('Juniper', 'cat', 3);
  
  const pets = [petOne, petTwo, petThree, petFour];
  
  $(readyNow); // Shorthand for $(document).ready(readyNow);
  
  function readyNow(){
    appendDom();
  }
  
  function appendDom(){
    let $header = $('<h1>Challenge 170</h1>');
    $('.container').append($header);
  
    let $table = $('<table></table>');
    $table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');
  
    let $tbody = $('<tbody id="tableBody"></tbody>');
    $table.append($tbody);
  
    $('.container').append($table);
  
    // YOUR CODE HERE
    // Remember, small steps!
  
    // Display each of the pets on the DOM.
  for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    $('#tableBody').append('<tr> <td>' + element.name + '</td> <td>' + element.type + '</td> <td>' + element.age +'</td>  </tr>');
  
  }
    // Add an input field that allows users to add new pets from the index page.
    $('.container').append('<input type="text" placeholder="Name" id="petName"></input>');
    $('.container').append('<input type="text" placeholder="Type" id="petType"></input>');
    $('.container').append('<input type="text" placeholder="Age" id="petAge"></input>');
    $('.container').append('<button id="addButton">Add</button>');
    $('#addButton').on('click', function () {
      let petNameVar = $('#petName').val();
      let petTypeVar = $('#petType').val();
      let petAgeVar = $('#petAge').val();
      $('#tableBody').append('<tr> <td>' + petNameVar + '</td> <td>' + petTypeVar + '</td> <td>' + petAgeVar + '</td>  </tr>');
    });
  
  
    // Add a button that clears out the list of pets.
    $('.container').append('<button id="clearButton">Clear</button>');
    $('#clearButton').on('click', function () {
      
      $('#tableBody').empty();
    });
  }
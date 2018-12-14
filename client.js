 
 
//Jquery
 $(document).ready(function(){

    //listens for submit
    $('#submit').on('click', function(){
    
        let first = $('#firstIn').val();
        let last = $('#lastIn').val();
        let ID = $('#idIn').val();
        let title = $('#titleIn').val();
        let annSal = $('#annSalIn').val();

        console.log(first, last, ID, title, annSal);
    })
 });//end submit
 
 
 
 // Display each of the pets on the DOM.
//   for (let i = 0; i < pets.length; i++) {
//     const element = pets[i];
//     $('#tableBody').append('<tr> <td>' + element.name + '</td> <td>' + element.type + '</td> <td>' + element.age +'</td>  </tr>');
  
//   }
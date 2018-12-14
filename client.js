 
 
//Jquery
 $(document).ready(function(){

    //listens for submit
    $('#submit').on('click', function(){
    
        //save values
        let first = $('#firstIn').val();
        let last = $('#lastIn').val();
        let ID = $('#idIn').val();
        let title = $('#titleIn').val();
        let annSal = $('#annSalIn').val();

        //empty fields
        $('#firstIn').empty();
        $('#lastIn').empty();
        $('#idtIn').empty();
        $('#titleIn').empty();
        $('#annSalIn').empty();

        //add row to table
        $('#tableBody').append('<tr><td>' +first+ '</td><td>' +last+ '</td><td>'+ID+'</td><td>'+title+'</td><td>'+annSal+'</td></tr>');

        // console.log(first, last, ID, title, annSal);
    })
 });//end submit
 
 
 
 // Display each of the pets on the DOM.
//   for (let i = 0; i < pets.length; i++) {
//     const element = pets[i];
//     $('#tableBody').append('<tr> <td>' + element.name + '</td> <td>' + element.type + '</td> <td>' + element.age +'</td>  </tr>');
  
//   }
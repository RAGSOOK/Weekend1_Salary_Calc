class Employee{
    constructor(firstIn, lastIn, idIN, titleIn, annSalIn ){
        this.firstName = firstIn;
        this.lastName = lastIn;
        this.ID = idIn;
        this.title = titleIn;
        this.annSal = annSalIn;
    }
} //end Employee class

let monthlyTotal = 0; 
let roster = [];
 
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

        newEmployee(first, last, ID, title, annSal);

        //empty fields
        $('#firstIn').val('');
        $('#lastIn').val('');
        $('#idIn').val('');
        $('#titleIn').val('');
        $('#annSalIn').val('');

        //add row to table
        $('#tableBody').append('<tr><td><button class="removeButton">X</button></td><td>' +first+ '</td><td>' +last+ '</td><td>'+ID+'</td><td>'+title+'</td><td>'+annSal+'</td></tr>');

        updateMonthlyTotal(annSal);

        //Update Total Monthly on DOM
        $('#totalMonthlyExpenditure').html(monthlyTotal);
        if( monthlyTotal > 20000){
            $('#totalMonthlyExpenditure').css('background-color', 'red');
        }
        // console.log(first, last, ID, title, annSal);

    });// end submit
    
    //remove a row
    $('#employeeTable').on('click', '.removeButton', killRow);

 });

// adds the monthly salary from an annual salary to total expenses
 let updateMonthlyTotal = function(indvAnnSal){
     indvMonthSal = Number(indvAnnSal) / 12;
     monthlyTotal += indvMonthSal;
 }

 //Deletes this row of the table
 let killRow = function(){
     $(this).parent().parent().remove();
     console.log('kill row');
 }

 // Adds new employee to roster
 function newEmployee( first, last, ID, title, annSal ){
    console.log( 'in newEmployee:',first, last, ID, title, annSal );
    roster.push( new Employee( first, last, ID, title, annSal ) );
    return true;
  } // end newEmployee
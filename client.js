let monthlyTotal = 0; 
 
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


 let updateMonthlyTotal = function(indvAnnSal){
     indvMonthSal = Number(indvAnnSal) / 12;
     monthlyTotal += indvMonthSal;
 }

 let killRow = function(){
     $(this).parent().parent().remove();
     console.log('kill row');
 }
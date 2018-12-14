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
        $('#firstIn').empty();
        $('#lastIn').empty();
        $('#idtIn').empty();
        $('#titleIn').empty();
        $('#annSalIn').empty();

        //add row to table
        $('#tableBody').append('<tr><td>' +first+ '</td><td>' +last+ '</td><td>'+ID+'</td><td>'+title+'</td><td>'+annSal+'</td></tr>');

        updateMonthlyTotal(annSal);

        //Update Total Monthly on DOM
        $('#totalMonthly').html(monthlyTotal);
        // console.log(first, last, ID, title, annSal);
    })
 });//end submit


 let updateMonthlyTotal = function(indvAnnSal){
     indvMonthSal = Number(indvAnnSal) / 12;
     monthlyTotal += indvMonthSal;
 }
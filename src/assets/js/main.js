
function display(dateStr){
        $('#myModal').modal('show');
        document.getElementById("Date").innerHTML = "  <option selected disabled [ngValue]=''>select Date</option><br><option id='Date' name='Date' ng-reflect-model='"+dateStr+"'>"+dateStr+"</option>";

    }

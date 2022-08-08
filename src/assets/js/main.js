
function display(dateStr){
        $('#myModal').modal('show');
        $('#BookingForm')[0].reset();
        document.getElementById("Date").innerHTML = "  <option selected disabled [ngValue]=''>select Date</option><br><option id='Date' name='Date' ng-reflect-model='"+dateStr+"'>"+dateStr+"</option>";
        
}
function setTime(){
        $('#time').prop('selectedIndex',0);
}
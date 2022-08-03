function display(dateStr)
{
    // alert(dateStr)
    $('#myModal').modal('show');

    // var data="<input id='txt-1' type='text' selected class='form-control mb-4'value='"+dateStr+"' ng-reflect-model='"+dateStr+"' name='da' >";  
  
// document.getElementById('txt-1').innerHTML+=data;  
// document.getElementById("txt-2").innerHTML=dateStr
// document.getElementById("txt-2").innerHTML += "<input id='txt-1' name='Date' value='"+dateStr+"' ng-reflect-model='"+dateStr+"' [(ngModel)]='Booking_Details.Date'>";
    
document.getElementById("Date").innerHTML = "  <option selected disabled [ngValue]=''>select Date</option><br><option id='Date' name='Date' ng-reflect-model='"+dateStr+"'>"+dateStr+"</option>";
    // document.getElementById('txt-1').setAttribute("ng-reflect-model", dateStr);
    // document.getElementById('txt-1').setAttribute("value", dateStr);
    // $('#txt-1').innerHTML = ("<a href=\"http://stackoverflow.com \">StackOverflow</a>")
    // $('#txt-1').val(dateStr);


}
function duplicate()
{
    // alert("sssss")
    $("#mylist option").each(function() {
        $(this).siblings('[value="'+ this.value +'"]').remove();
    });

}

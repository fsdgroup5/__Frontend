
function display(dateStr){
        $('#myModal').modal('show');
        $('#BookingForm')[0].reset();
        document.getElementById("Date").innerHTML = "  <option selected disabled [ngValue]=''>select Date</option><br><option id='Date' name='Date' ng-reflect-model='"+dateStr+"'>"+dateStr+"</option>";
        
}
function setCalendar(){
        // alert('s')
        var startDate = new Date();
      startDate.setDate(startDate.getDate() + 1);
      var endDate = new Date(startDate.valueOf());
      endDate.setDate(endDate.getDate() + 14);
      var startDateStr=startDate.toISOString();
      var endDateStr=endDate.toISOString();

      var start = new Date(startDateStr);
      var end = new Date(endDateStr);
      var loop = new Date(start);
      while(loop <= end){
       var s=loop.toISOString().substring(0,10)
      //  $("[data-date='"+s+"']").css('background-color','white')
      
      $(".fc-daygrid-day[data-date='"+s+"']").addClass('available_dates')

        var newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
      }
}
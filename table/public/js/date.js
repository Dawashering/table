$(document).ready(function(){
    var dtToday = new Date();
    var day = ("0" + dtToday.getDate()).slice(-2);
    var month = ("0" + (dtToday.getMonth() + 1)).slice(-2);
    
    if(month < 10)
    month = '0' + month.toString();
    if(day < 10)
    day = '0' + day.toString();
    var maxDate = dtToday.getFullYear()+"-"+(month)+"-"+(day) ;
    $('#dateControl').attr('min',maxDate);
    document.getElementById('dateControl').value = maxDate;
    })

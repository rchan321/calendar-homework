$(document).ready(()=>{
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));



$(".savebtn").click(function () {
    var areaText = $(this).siblings("textarea")[0].value;
    var id = $(this).siblings("textarea")[0].id;
    console.log(areaText);
    localStorage.setItem("event" + id, areaText);
});
    
});

$(document).ready(()=>{
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));




    
});

const buttonSaveBtn = document.querySelector(
    ".col-md-1 saveBtn"
)

buttonSaveBtn.addEventListener("click")
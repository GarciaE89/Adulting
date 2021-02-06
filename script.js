$(document).ready(function () {
    // Current date and time will appear at the top of page, attempted to get seconds to works, currently you have to reload to see updated seconds
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    var plannerHours = {
        Morning: [8, 9, 10, 11],
        Afternoon: [12, 1, 2, 3, 4, 5]
    };
   

 

    // Loop for Morning created divs, and botton (save)
    for (var amHours = 0; amHours < plannerHours.Morning.length; amHours++) {
        var newRow = $("<div class='row'></div>");
        $('.container').append(newRow);
        var timeAm = $(`<div class='col-1 time-block'>${plannerHours.Morning[amHours]}AM</div>`);
        var textSpace = $(`<textarea class="col-10">Organize your schedule</textarea>`);
        var saveBtn = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(timeAm, textSpace, saveBtn);

       
        
    } 

    // for loop for Afternoon, created divs, and button (save)
    for (var pmHours = 0; pmHours < plannerHours.Afternoon.length; pmHours++) {
        var newRow = $("<div class='row'></div>");
        $('.container').append(newRow);
        var timePm = $(`<div class='col-1 time-block'>${plannerHours.Afternoon[pmHours]}PM</div>`);
        var textSpace = $(`<textarea class="col-10">Organize your schedule</textarea>`);
        var saveBtn = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(timePm, textSpace, saveBtn);
    }
    
    $(".saveBtn").click( function () {
    
        console.log(this);
        // var textarea = $(this).siblings("textarea").val();
        // // var time = $(this).parent().attr("id");

        
        // localStorage.setItem(textarea)
    })})

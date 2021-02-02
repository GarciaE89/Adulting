$(document).ready(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    var plannerHours = {
        Morning: [8, 9, 10, 11],
        Afternoon: [12, 1, 2, 3, 4, 5]
    };
    var i = 0;

 

    // Loop for adding Morning to .container
    for (var amHours = 0; amHours < plannerHours.Morning.length; amHours++) {
        var newRow = $("<div class='row'></div>");
        $('.container').append(newRow);
        var timeAm = $(`<div class='col-1 time-block'>${plannerHours.Morning[amHours]}AM</div>`);
        var textSpace = $(`<textarea class="col-10" data-time=>Organize your schedule</textarea>`);
        var saveBtn = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(timeAm, textSpace, saveBtn);

    
        
    }
    for (var pmHours = 0; pmHours < plannerHours.Afternoon.length; pmHours++) {
        var newRow = $("<div class='row'></div>");
        $('.container').append(newRow);
        var timePm = $(`<div class='col-1 time-block'>${plannerHours.Afternoon[pmHours]}PM</div>`);
        var textSpace = $(`<textarea class="col-10" data-time=>Organize your schedule</textarea>`);
        var saveBtn = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(timePm, textSpace, saveBtn);
    }})
    
    
    

  
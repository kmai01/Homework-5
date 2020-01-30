// declare time label , input form , button in array

var timelabel = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var inputform = [];
var savebutton = [];




// loop create time slot with bootstrap class

for (var i = 0; i < 9; i++) {

    var inputgroupmb3Div = $("<div>")
    inputgroupmb3Div.addClass("input-group mb-3")
    $("#Entry-Container").append(inputgroupmb3Div);

    var inputgroupprependDiv = $("<div>")
    inputgroupprependDiv.addClass("input-group-prepend")
    inputgroupmb3Div.append(inputgroupprependDiv);

    var inputgrouppretextDiv = $("<span>")
    inputgrouppretextDiv.addClass("input-group-text")
    inputgrouppretextDiv.text(timelabel[i])
    inputgroupprependDiv.append(inputgrouppretextDiv);

    inputform[i] = $('<input />', { type: 'text', class: 'form-control' })
    inputgroupmb3Div.append(inputform[i]);

    var inputgroupappend = $("<div>")
    inputgroupappend.addClass("input-group-append")
    inputgroupmb3Div.append(inputgroupappend);

    savebutton[i] = $("<button>")
    savebutton[i].addClass("btn btn-outline-secondary")
    savebutton[i].text("Save")
    inputgroupappend.append(savebutton[i])

}

// Re-populate localstorage back to form after refresh

var event0 = localStorage.getItem("event0");
inputform[0].val(event0);
var event1 = localStorage.getItem("event1");
inputform[1].val(event1);
var event2 = localStorage.getItem("event2");
inputform[2].val(event2);
var event3 = localStorage.getItem("event3");
inputform[3].val(event3);
var event4 = localStorage.getItem("event4");
inputform[4].val(event4);
var event5 = localStorage.getItem("event5");
inputform[5].val(event5);
var event6 = localStorage.getItem("event6");
inputform[6].val(event6);
var event7 = localStorage.getItem("event7");
inputform[7].val(event7);
var event8 = localStorage.getItem("event8");
inputform[8].val(event8);


// Button function to save to localStorage

savebutton[0].click(function () {

    var content = inputform[0].val();
    localStorage.setItem("event0", content);
    console.log(content);

});

savebutton[1].click(function () {

    var content = inputform[1].val();
    localStorage.setItem("event1", content);
    console.log(content);

});

savebutton[2].click(function () {

    var content = inputform[2].val();
    localStorage.setItem("event2", content);
    console.log(content);

});

savebutton[3].click(function () {

    var content = inputform[3].val();
    localStorage.setItem("event3", content);
    console.log(content);

});

savebutton[4].click(function () {

    var content = inputform[4].val();
    localStorage.setItem("event4", content);
    console.log(content);

});

savebutton[5].click(function () {

    var content = inputform[5].val();
    localStorage.setItem("event5", content);
    console.log(content);

});

savebutton[6].click(function () {

    var content = inputform[6].val();
    localStorage.setItem("event6", content);
    console.log(content);

});

savebutton[7].click(function () {

    var content = inputform[7].val();
    localStorage.setItem("event7", content);
    console.log(content);

});

savebutton[8].click(function () {

    var content = inputform[8].val();
    localStorage.setItem("event8", content);
    console.log(content);

});


var current = $("time");
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(time)




// Get current date
var currentDate = new Date()

// Function convert hour to number
var momentDate = moment(currentDate).format('H');
console.log(momentDate)

// Before 9 AM

if (momentDate < 9) {

    for (var i = 0; i <= inputform.length - 1; i++) {

        inputform[i].css("background-color", "lightgreen");

    }
}

// At 9 AM

switch (momentDate) {

    case '9':

        
        inputform[0].css("background-color", "red");

        for (var i = 1; i <= inputform.length - 1; i++) {

            inputform[i].css("background-color", "lightgreen");
        }
        break;

    case '10':

        inputform[0].css("background-color", "lightgray");
        inputform[1].css("background-color", "red");

        for (var i = 2; i <= inputform.length - 1; i++) {

            inputform[i].css("background-color", "lightgreen");
        }
        break;

    case '11':

        for (var i = 0; i < 2; i++) {

            inputform[i].css("background-color", "lightgray");
        }

        inputform[2].css("background-color", "red");

        for (var i = 3; i <= inputform.length - 1; i++) {

            inputform[i].css("background-color", "lightgreen");
        }
        break;

    case '12':

        for (var i = 0; i < 3; i++) {

            inputform[i].css("background-color", "lightgray");
        }

        inputform[3].css("background-color", "red");

        for (var i = 4; i <= inputform.length - 1; i++) {

            inputform[i].css("background-color", "lightgreen");
        }
        break;

    case '13':


        for (var i = 0; i < 4; i++) {

            inputform[i].css("background-color", "lightgray");
        }

        inputform[4].css("background-color", "red");

        for (var i = 5; i <= inputform.length - 1; i++) {

            inputform[i].css("background-color", "lightgreen");
        }
        break;

    case '14':

        for (var i = 0; i < 5; i++) {

            inputform[i].css("background-color", "lightgray");
        }

        inputform[5].css("background-color", "red");

        for (var i = 6; i <= inputform.length - 1; i++) {

            inputform[i].css("background-color", "lightgreen");
        }
        break;
    case '15':

        for (var i = 0; i < 6; i++) {

            inputform[i].css("background-color", "lightgray");
        }

        inputform[6].css("background-color", "red");

        for (var i = 7; i <= inputform.length - 1; i++) {

            inputform[i].css("background-color", "lightgreen");
        }

        break;
    case '16':

        for (var i = 0; i < 7; i++) {

            inputform[i].css("background-color", "lightgray");
        }

        inputform[7].css("background-color", "red");
        inputform[8].css("background-color", "lightgreen");

        break;

    case '17':

        for (var i = 0; i < 8; i++) {

            inputform[i].css("background-color", "lightgray");
        }

        inputform[8].css("background-color", "red");

         break;


}
// After 5 PM
if (momentDate > 17) {

    for (var i = 0; i <= inputform.length - 1; i++) {

        inputform[i].css("background-color", "lightgray");
    }

}

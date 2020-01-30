var timelabel=["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

// loop create time slot with bootstrap class

for ( var i=0 ; i < 9; i++) { 

var inputgroupmb3Div= $("<div>")
inputgroupmb3Div.addClass("input-group mb-3")
$("#Entry-Container").append(inputgroupmb3Div);

var inputgroupprependDiv= $("<div>")
inputgroupprependDiv.addClass("input-group-prepend")
inputgroupmb3Div.append(inputgroupprependDiv);

var inputgrouppretextDiv= $("<span>")
inputgrouppretextDiv.addClass("input-group-text")
inputgrouppretextDiv.text(timelabel[i])
inputgroupprependDiv.append(inputgrouppretextDiv);

var inputform=$('<input />', {type:'text', class:'form-control'})
inputgroupmb3Div.append(inputform);

var inputgroupappend=$("<div>")
inputgroupappend.addClass("input-group-append")
inputgroupmb3Div.append(inputgroupappend);

var savebutton=$("<button>")
savebutton.addClass("btn btn-outline-secondary")
savebutton.text("Save")
inputgroupappend.append(savebutton)

}









var current= $("time");
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(time)
current.text(time);

var eightAM = 8


console.log(eightAM);


 var currentDate = new Date()
 
var momentDate = moment(currentDate).format('H'); 
console.log(momentDate) 



// Re-populate localstorage back to form after refresh

event =localStorage.getItem("event");

console.log(event)
$("#form1").val(event);


// button to save text entry

$('#saveButton1').click(function () {

    storeevent();

});




// set the item in localStorage
function storeevent() {

    var content = $('#form1').val();

    localStorage.setItem("event", content);

    console.log(content);

}


if ( eightAM < momentDate ) {

    $('#form1').css("background-color",  "blue");
    

}
 


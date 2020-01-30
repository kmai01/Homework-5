


var current= $("time");
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(time)
current.text(time);

var eightAM = 8


console.log(eightAM);


 var currentDate = new Date()
 
var momentDate = moment(currentDate).format('H'); 
console.log(momentDate) 





event =localStorage.getItem("event");

console.log(event)
$("#form1").val(event);



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
 


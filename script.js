


var nineAM = $('#lead');
var nineAMM = moment().hour(Number);
nineAM.textContent=nineAMM;
console.log(nineAMM);
 var currentDate = new Date()
 console.log(currentDate)
var momentDate = moment(currentDate).format("ddd, hA"); 
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



 


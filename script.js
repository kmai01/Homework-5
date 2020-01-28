


var nineAM = $('#lead');
var nineAMM = moment().format();
nineAM.textContent=nineAMM;
console.log(nineAMM);






event =localStorage.getItem("event");

console.log(event)
$("#form1").text(event);



$('#saveButton1').click(function () {

    storeevent();

});




// set the item in localStorage
function storeevent() {

    var content = $('#form1').val();

    localStorage.setItem("event", content);

    console.log(content);

}



 


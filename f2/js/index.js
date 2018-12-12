function annoy(){

var fname = prompt("tell me your name");

document.getElementById("annoy").innerHTML  = "I am annoed";

while(true){
alert(fname +" are we there yet?");
}

}
function mark_present()
{
    alert("yeet");
    var cadet_name = $('#cadet_name').val();
    alert(cadet_name+ " is here!");
}

function mark_present()
{
    var cadet_name = $('#cadet_name').val();
    alert(cadet_name+"is here!");
    $('#present_cadets').append("<ul id = 'cadets_list'></ul>");
    $('#caders_list').append("<l1>")+cadet_name+"</l1>");
}

$(document).ready(function(){
    var flag = false;
    setInterval(function() {
        flag = !flag;
        $("body").css("background", flag ? "red" : "green");
        $("body").css("background", flag ? "green" : "red");
    }, 1000);
});
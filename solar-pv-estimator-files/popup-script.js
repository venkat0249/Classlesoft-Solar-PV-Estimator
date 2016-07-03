function OnSubmitForm(){

    urlString= 'report.htm?';
    var sCapacity = document.forms["myForm"]["sCapacity"].value;
    var loss = document.forms["myForm"]["loss"].value;
    var tilt = document.forms["myForm"]["tilt"].value;
    var azimuth = document.forms["myForm"]["azimuth"].value;

    var dcRatio = document.forms["myForm"]["dcRatio"].value;

    var groundRatio = document.forms["myForm"]["groundRatio"].value;
    var invEfficiency = document.forms["myForm"]["invEfficiency"].value;
    var elctricP= document.forms["myForm"]["electricP"].value;


var temp1 = document.getElementById("moduleType");
var moduleType = temp1.options[temp1.selectedIndex].value;


var temp2 = document.getElementById("arrayType");
var arrayType = temp2.options[temp2.selectedIndex].value;

urlString+= 'moduleType=' + moduleType;
  urlString+='&sCapacity=' + sCapacity;
  urlString+= '&losses=' + loss;
    urlString+= '&tilt=' + tilt;
  urlString+='&azimuth=' + azimuth;
  urlString+= '&dcRatio=' + dcRatio;
  urlString+= '&groundRatio=' + groundRatio;
  urlString+= '&invEfficiency=' + invEfficiency;
  urlString+= '&arrayType=' + arrayType;
urlString+= '&latit=' + latitude;
urlString+= '&longit=' + longitude;
urlString+= '&country=' +country_name;
urlString+= '&electricPrice=' +elctricP;
   window.open(urlString);
        
}
function validateForm() {

    var sCapacity = document.forms["myForm"]["sCapacity"].value;
    var loss = document.forms["myForm"]["loss"].value;
    var tilt = document.forms["myForm"]["tilt"].value;
    var azimuth = document.forms["myForm"]["azimuth"].value;
    var dcRatio = document.forms["myForm"]["dcRatio"].value;
    var groundRatio = document.forms["myForm"]["groundRatio"].value;
    var invEfficiency = document.forms["myForm"]["invEfficiency"].value;
    var elctricP= document.forms["myForm"]["electricP"].value;


    var error = "";
    
    if (sCapacity < 0) {
        error += "Capacity must be greater than zero </br>";

    }
    if (loss < 0 || loss > 100) {
        error += "Losses must range between 0 to 100 </br>";


    }
    if (tilt < 0 || tilt > 360) {

        error += "Tilt must be between 0 to 360 </br>";

    }

    if (azimuth < 0 || azimuth > 360) {
        error += "azimuth must be between 0 to 360 </br>";

    }
    if (dcRatio <0) {
        error += "DC to AC ratio must be positive value </br>";

    }
    if (groundRatio > 1) {
        error += "Ground ratio must be less than 1 </br>";

    }
    if (invEfficiency > 100) {
        error += "Inverter efficiency must be less than 100";
    }
    if (elctricP<= 0) {
        error += "Price must be greater than 0";
    }
    if (error != "") {
        document.getElementById("lblErrorHead").innerHTML = "Please correct the following error and try again";
        document.getElementById("lblError").innerHTML = error;
        return false;
    }
else
{
OnSubmitForm();
}
    
}

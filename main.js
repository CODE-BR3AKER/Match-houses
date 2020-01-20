function matchHouses(houseNumber){
var matchnumber = (houseNumber * 6) - (houseNumber - 1);
 if (houseNumber >= 1){
  return matchnumber;
 }else if (houseNumber == 0){
  return "0";
 }else{
  alert("Please specify a positive integer !");
 }
}


function calculate(){
var housenumbers = document.getElementById("houses").value;
if (Number(housenumbers) === parseInt(housenumbers)){
var texto = matchHouses(housenumbers);
document.getElementById("result").textContent = texto;
} else{
  alert("Please specify a positive integer !");
 }
}


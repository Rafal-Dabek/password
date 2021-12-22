function myFunction() {
  
  let x = document.getElementById("numb").value;
  
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Link w opisie";
  }
  document.getElementById("demo").innerHTML = text;
}



/*if (document.getElementById("p").style.display == "none"){
  document.getElementById("p").style.display="block";
}*/


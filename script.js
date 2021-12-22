function myFunction() {
  
  let x = document.getElementById("numb").value;
  
  let text;
  if (x != "Test_Belbin_@01"
    //isNaN(x) || x < 1 || x > 10
    ) {

    //text = "Input not valid";

    //document.getElementById("demo").innerHTML = text;

    document.getElementById("demo").style.display="block";

    document.getElementById("demo2").style.display="none";
    
  } 
  else
  {

    text =  "https://rafal-dabek.github.io/Test_Belbina/";

    
    document.getElementById("demo").style.display = "none"

    document.getElementById("demo2").style.display="block";
  
    document.getElementById("demo2").setAttribute("href",text);
    
  }
  //document.getElementById("demo").innerHTML = text;
}



/*if (document.getElementById("p").style.display == "none"){
  document.getElementById("p").style.display="block";
}*/


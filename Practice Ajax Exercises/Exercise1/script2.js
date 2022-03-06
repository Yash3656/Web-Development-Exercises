let button = document.querySelector("#btn");
let para = document.querySelector("p");
button.addEventListener('click',()=>{
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function(event){
    para.innerText = xhttp.responseText;
  };.
  xhttp.open('GET','details.html',true);
  xhttp.send();
});

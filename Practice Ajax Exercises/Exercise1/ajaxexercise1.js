function showdetails() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("try").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "details.txt", true);
  xhttp.send();
}

function print()
{
  var text = '{"name":"John", "age":31, "city":"New York"}';
  var obj = JSON.parse(text);
  document.getElementById("try").innerHTML="Convert a string written in JSON format, into a JavaScript object.";
  document.getElementById("demo").innerHTML="Name:- " +obj.name;
  document.getElementById("break");
  document.getElementById("demo1").innerHTML= "Age:- " + obj.age;

}


function myFunction() {
    var txt;
    if (confirm("Please confirm your order")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
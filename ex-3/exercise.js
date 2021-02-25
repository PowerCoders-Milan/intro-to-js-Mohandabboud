// Example

var x = prompt("Wirte the first number");
var y = prompt("Wirte the second number");

if (x>y) {
    console.log( "The greater number of " + x +" and " + y +" is " + x + ".");
    window.alert("The greater number of " + x +" and " + y +" is " + x + ".");
}

else if (x<y) {
    console.log( "The greater number of " + x +" and " + y +" is " + y + ".");
    window.alert("The greater number of " + x +" and " + y +" is " + y + ".");
}

else {
    console.log( "The numbers are the same.");
    window.alert("The numbers are the same.");
}
 
// Example

var x = prompt("Wirte here anything you want");
var y = x.length;
window.alert( x + " " + y);

var a = prompt("Wirte another phrase");
var b = a.length;

if (b < y) {
    window.alert( x +" phrase was the longest with " + y +" number of characters."); 
}
else if (b > y) {
    window.alert( a +" phrase was the longest with " + b +" number of characters."); 
}

else {
    window.alert(" both phrases have the same number of characters which is " + y +".");
}

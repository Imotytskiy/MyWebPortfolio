function showIt() {
    document.getElementById("hid").style.visibility = "visible";
}
setTimeout("showIt()", 3000); // after 3 seconds
let timeoutId = setTimeout("showIt()", 3000); // store the timeout ID in a variable

function closeIt() {
    clearTimeout(timeoutId); // clear the timeout to prevent the popup from showing again
    document.getElementById("hid").style.visibility = "hidden";
} // hide the popup


//Javascript Code

//Event listener
document.addEventListener('click', click);
document.addEventListener('dblclick', dblclickHandler)
document.addEventListener('mousedown', mouseDown)
document.addEventListener('scroll', scrolling)
document.addEventListener('keydown', downkey)
document.addEventListener('keyup', upkey)
// Function
function click() {
    console.log('Click event');
}
function dblclickHandler() {
    console.log("Double click")
}
function mouseDown() {
    console.log("Mouse down")
}
function scrolling() {
    console.log('Scrolled')
}
function downkey() {
    console.log('KEYDOWN')
}
function upkey() {
    console.log("KEYUP")
}
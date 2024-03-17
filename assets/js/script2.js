
var color = 'white';
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'lightblue';
    } 

    else if (event.key === 'q') {
    crearDiv("purple"); 
} else if (event.key === 'w') {
    crearDiv("gray"); 
} else if (event.key === 'e') {
    crearDiv("brown"); 
}

document.getElementById('key').style.backgroundColor = color;
});function crearDiv(color) {


var newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = color;
newDiv.style.border = "1px solid black";
newDiv.style.marginBottom = "10px";

document.body.appendChild(newDiv);
}
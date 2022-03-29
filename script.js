function likedDefinition(alert){
    console.log(alert);
}

var numClicks = 0;
function increaseLike() {
var likesElement = document.getElementById('counter')
numClicks += 1 
likesElement.innerHTML = `${numClicks} like(s)` 
console.log(likesElement)
}
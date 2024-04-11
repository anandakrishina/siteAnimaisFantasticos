const test = document.getElementById('test1');
console.log(test);

const animaisDescNode = document.querySelectorAll('.animalh2');
const animaisDescCollection = document.getElementsByClassName('animalh2');


console.log(animaisDescNode);
console.log(animaisDescCollection);

animaisDescNode.forEach(function(item,index){
    console.log(item.innerHTML);
})
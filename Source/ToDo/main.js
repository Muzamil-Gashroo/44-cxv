let button = document.getElementById('btn');
let input = document.getElementById('text');
let space = document.getElementById('space');


button.addEventListener('click', function(){

    abc();

});



input.addEventListener('keydown', function(event){

    if(event.key === 'Enter'){
        abc();
    }

});


function abc(){
    
var list = document.createElement('li');
list.innerHTML = input.value;
space.appendChild(list);
input.value=" ";

list.addEventListener('click', function(){

    list.style.textDecoration='line-through';

});

list.addEventListener('dblclick', function(){
    space.removeChild(list);
});

}

let addButton = document.getElementById('add');
let toDoContainer = document.getElementById('toDoContainer');
let clear = document.getElementById('clear');
add.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputtext.value;
    inputtext.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.color = 'greenyellow'
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })

    clear.addEventListener('click', function(){
        paragraph.remove();
    })


})


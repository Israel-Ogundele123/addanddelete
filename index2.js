const deleteItem = (event) => {
    event.target.parentElement.style.display = 'none';
}

function add(event) {
    event.preventDefault();
    let text = document.getElementById('text').value;

    if (text === '')
    {
       return alert('Pls, enter a text');
    }
    const divElem = document.createElement('div');
    divElem.textContent = text;
    
    const spanElem = document.createElement('span');
    spanElem.textContent = 'X';
    spanElem.classList.add('delete');
    spanElem.onclick = deleteItem;


    divElem.appendChild(spanElem);
    
    document.querySelector('.todo-list').appendChild(divElem);

    document.getElementById('text').value = '';
}

document.querySelector('#add-button').addEventListener('click', add);

document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', deleteItem)
});
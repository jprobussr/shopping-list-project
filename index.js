const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

const addItem = (e) => {
    e.preventDefault();
    const newItem = itemInput.value;

    if (newItem === '') {
        alert('Please add an item to the list.');
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');
    console.log(button);
    li.appendChild(button);
    itemList.appendChild(li);

    console.log(li);

    itemInput.value = '';
}

const createButton = (classes) => {
    const button = document.createElement('button');
    button.classList = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    console.log(icon);
    return button;
}

const createIcon = (classes) => {
    const icon = document.createElement('i');
    icon.classList = classes;
    return icon;
}

const removeItems = (e) => {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm("Are you sure you want to remove this item?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

const clearItems = () => {
    if (confirm('Are you sure you want to remove items.')) {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
    }
}


itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItems);
clearBtn.addEventListener('click', clearItems);
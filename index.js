const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


const addItem = (e) => {
    e.preventDefault();
    const newItem = itemInput.value;

    if (newItem === '') {
        alert('Please add an item to the list');
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);

    
    resetUI();
    itemInput.value = '';
   
}

const createButton = (classes) => {
    const button = document.createElement('button');
    button.classList = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

const createIcon = classes => {
    const icon = document.createElement('i');
    icon.classList = classes;
    return icon;
}

// const removeItems = (e) => {
//     if (e.target.parentElement.classList.contains('remove-item')) {
//         if (confirm('Are you sure you want to delete the item?')) {
//             e.target.parentElement.parentElement.remove();

//             resetUI();
//         }
//     }
// }

const removeItems = e => {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Are you sure you want to remove the item from the list?')) {
            e.target.parentElement.parentElement.remove();
        }

        resetUI();
    }
}


// const clearItems = () => {
//     if (confirm('Are you sure you want to remove items from the list?')) {
//         while (itemList.firstChild) {
//             itemList.removeChild(itemList.firstChild);
//         }

//         resetUI();
//     }
// }

const clearItems = () => {
    if (confirm('Are you sure you want to remove the items from the list?')) {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }

        resetUI();
    }
}

const filterItems = (e) => {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }

    });
}

const resetUI = () => {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItems);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

resetUI();
let text = null; // store the todo text
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const textInput = document.getElementById("textid");
const resultDisplay = document.getElementById("resultDisplay");

// Add button click
addBtn.addEventListener('click', () => {
    if (!textInput.value.trim()) {
        resultDisplay.textContent = 'No todo entered';
        return;
    }
    text = textInput.value; // store the value
    resultDisplay.textContent = `Your todo: ${text}`;
    textInput.value = '';
});

// Delete button click
deleteBtn.addEventListener('click', () => {
    if (text) {
        text = null;
        resultDisplay.textContent = 'Todo deleted';
    } else {
        resultDisplay.textContent = 'No todo to delete';
    }
});
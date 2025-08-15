let contact = null;

const nameId = document.getElementById("name");
const phoneId = document.getElementById("phoneNo");
const addIn = document.getElementById("add");
const deleteId = document.getElementById("delete");
const resultDisplay = document.getElementById("result");

addIn.addEventListener("click", () => {
    const name = nameId.value.trim();
    const phoneNo = phoneId.value.trim();

    if (!name || !phoneNo) {
        resultDisplay.textContent = "Please enter all fields";
        return;
    }

    contact = { name, phoneNo };
    resultDisplay.textContent = `Saved contact: ${name} - ${phoneNo}`;

    nameId.value = "";
    phoneId.value = "";
});

deleteId.addEventListener("click", () => {
    if (contact) {
        contact = null;
        resultDisplay.textContent = "Contact deleted";
    } else {
        resultDisplay.textContent = "No contact to delete";
    }
});

function addingEventListener() {
    const button = document.getElementById("button"); 
    if (button) {
        button.addEventListener("click", function () {
            console.log("Button was clicked!");
        });
    } else {
        console.error("Element with ID 'button' not found!");
    }
}

addingEventListener();


// Function to fill empty text inputs with "NA" and move to the next input using TAB
function fillTextFields() {
    const textInputs = document.querySelectorAll('input[type="text"], textarea');
    
    textInputs.forEach(input => {
        if (input.value.trim() === '') {
            input.value = 'NA';
        }
        // Move focus to the next input
        input.dispatchEvent(new Event('input')); // Trigger input event (if needed for validation)
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', keyCode: 9, code: 'Tab', which: 9 }));
    });
}

// Call the function to fill text fields
fillTextFields();
function checkUsername() {                                  // Declare a function
    var elMsg = document.getElementById('feedback');        // Get feedback element
    var elUsername = document.getElementById('username');   // Get username input
    if (elUsername.value.length < 5) {                      // If username is too short
        elMsg.textContent = 'Username must be 5 characters or more';    // Set msg
    } else {                                                // Otherwise
        elMsg.textContent = '';                             // Clear message
    }
}

var elUsername = document.getElementById('username');       // Get username input
elUsername.onblur = checkUsername;    // When it loses focus call checkUsername()
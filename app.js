Pi.init({ version: "2.0", sandbox: true }); // Initialize the SDK 

const appStatus = document.getElementById('app-status'); 
const payButton = document.getElementById('payButton'); 

// Auto-login on page load
Pi.authenticate(['username', 'payments']) // Request necessary scopes
    .then(authResult => {
        appStatus.textContent = `Logged in as: ${authResult.user.username}`;
        payButton.disabled = false; // Enable the button 
        // Send accessToken to backend for verification 
    })
    .catch(error => {
        appStatus.textContent = "Login Error"; 
        console.error(error);
    });
(function() {
    console.log('Unisat Auto Sign script loaded');

    // Function to find and click the "Sign" button
    const clickSignButton = () => {
        // More specific selector for the "Sign" button
    const clickSignButton = () => {
    const signButton = document.evaluate("//div[contains(text(), 'Sign')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (signButton) {
        signButton.click();
        console.log('Sign button clicked by the extension!');
    } else {
        console.log('Sign button not found.');
    }
};


    // Periodically try to find and click the button
    const interval = setInterval(clickSignButton, 1000);

    // Stop the interval if successful or after some time
    setTimeout(() => {
        clearInterval(interval);
        console.log('Stopping auto-sign attempts.');
    }, 15000); // Stops after 15 seconds
})();


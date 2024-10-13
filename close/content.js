function autoClickButtons() {
  // Array of button labels you want to click
  const buttonLabels = [
    "Connect",
    "Authorize app",
    "Authorize",
    "Tweet to Join",
	  "Go",
	  "Check-in"
  ];

  // Loop through each label and try to find & click the button
  buttonLabels.forEach(label => {
    let button = [...document.querySelectorAll('button')].find(b => b.textContent.includes(label));
    if (button) {
      button.click();
      console.log(`Clicked "${label}" button`);
    }
  });
}

// Run the autoClickButtons function every second to check for buttons
setInterval(autoClickButtons, 6000);


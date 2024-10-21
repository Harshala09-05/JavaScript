document.addEventListener("DOMContentLoaded", () => {

const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password Files detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
  ];
  
  const terminal = document.getElementById("terminal");
  
  // Utility function to simulate random delay
  function delayRandom() {
    return new Promise(resolve => {
      const delay = Math.floor(Math.random() * 7000) + 1000; // Random delay between 1 and 7 seconds
      setTimeout(resolve, delay);
    });
  }
  
  // Function to display messages with blinking dots
  async function startHacking() {
    for (let i = 0; i < messages.length; i++) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerHTML = messages[i] + '<span class="dots"></span>';
      terminal.appendChild(messageElement);
  
      // Random delay before showing the next message
      await delayRandom();
    }
  
    const finalMessage = document.createElement("div");
    finalMessage.innerHTML = "Hacking Completed!";
    terminal.appendChild(finalMessage);
  }
  
  // Start the hacking process
  startHacking();
});
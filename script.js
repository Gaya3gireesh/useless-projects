async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
  
    if (!userInput.trim()) return;  // Prevent empty messages
  
    // Display user's message in the chat
    addMessage(userInput, "user");
  
    // Send the user message to the backend
    const response = await fetch("http://127.0.0.1:5000/roast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput })
    });
  
    const data = await response.json();
    addMessage(data.reply, "bot");  // Display bot's response
  
    // Clear the input field
    document.getElementById("user-input").value = "";
  }
  
  function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("p");
    messageElement.className = sender;
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the latest message
  }
  
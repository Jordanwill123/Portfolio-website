function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');
    
    if (userInput.trim() !== "") {
        var userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user-message');
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatBox.appendChild(userMessage);
        
        var botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot-message');
        botMessage.innerHTML = `<p>Thanks for your question! Let me get back to you.</p>`;
        chatBox.appendChild(botMessage);
        
        document.getElementById('user-input').value = "";  // Clear input field
        chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
    }
}

const chatbotForm = document.getElementById('chatbot-form');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');

// Define your About Me, Skills, and Experience
const aboutMe = "I’m Jordan Williams, a senior at Bowie State University studying Computer Technology with a track in Network Infrastructure. I’m a student-athlete who loves working out, and I also own Lenair Auto Detailing in Brandywine, MD.";
const skills = "I have experience with JavaScript, HTML5, computer hardware, and networking. I'm also skilled in customer service, business management, and leadership.";
const experience = "I’ve worked at Shoe City, Chick-fil-A, and currently work at Harmony at Waldorf. I’ve managed customer service, inventory, and business operations at Lenair Auto Detailing since May 2020.";

// Function to handle sending a message
function sendMessage(event) {
    event.preventDefault();

    const message = userInput.value.trim().toLowerCase();
    if (!message) return;

    // Display user message
    appendMessage('You', message);
    userInput.value = '';

    // Handle chatbot response
    handleResponse(message);
}

function handleResponse(message) {
    if (message.includes('about') || message.includes('who are you') || message.includes('introduce')) {
        appendMessage('Bot', aboutMe);
    } else if (message.includes('skills') || message.includes('what can you do')) {
        appendMessage('Bot', skills);
    } else if (message.includes('experience') || message.includes('work') || message.includes('job')) {
        appendMessage('Bot', experience);
    } else if (message.includes('hi') || message.includes('hello')) {
        appendMessage('Bot', 'Hello! Ask me about my skills, experience, or background.');
    } else if (message.includes('bye') || message.includes('goodbye')) {
        appendMessage('Bot', 'Goodbye! Have a great day!');
    } else {
        appendMessage('Bot', 'I’m not sure how to answer that. Ask me about my skills, experience, or background.');
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (sender === 'You') {
        messageElement.classList.add('user-message');
    } else {
        messageElement.classList.add('bot-message');
    }

    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);

    // Auto-scroll to the latest message
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Add event listener to form submission
chatbotForm.addEventListener('submit', sendMessage);

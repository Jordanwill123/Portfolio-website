const chatbotForm = document.getElementById('chatbot-form');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');

const dialogflowSessionId = 'YOUR_SESSION_ID';
const projectId = 'YOUR_PROJECT_ID';
const token = 'YOUR_CLIENT_ACCESS_TOKEN';

async function sendMessage(event) {
    event.preventDefault();

    const message = userInput.value.trim();
    if (!message) return;

    // Display user message in chat
    appendMessage('You', message);
    userInput.value = '';

    try {
        const response = await fetch(
            `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${dialogflowSessionId}:detectIntent`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    queryInput: {
                        text: {
                            text: message,
                            languageCode: 'en'
                        }
                    }
                })
            }
        );

        const jsonResponse = await response.json();
        const reply = jsonResponse.queryResult.fulfillmentText;
        const action = jsonResponse.queryResult.action;

        // Display chatbot's response
        handleAction(action, reply);
    } catch (error) {
        console.error('Error:', error);
        appendMessage('Bot', 'Oops! Something went wrong. Try again.');
    }
}

function handleAction(action, reply) {
    switch (action) {
        case 'show.skills':
            appendMessage('Bot', `**Skills:** ${reply}`);
            break;
        case 'show.projects':
            appendMessage('Bot', `**Projects:** ${reply}`);
            break;
        case 'show.experience':
            appendMessage('Bot', `**Experience:** ${reply}`);
            break;
        case 'show.resume':
            appendMessage('Bot', `**Resume:** ${reply}`);
            break;
        case 'show.contact':
            appendMessage('Bot', `**Contact:** ${reply}`);
            break;
        default:
            appendMessage('Bot', reply);
            break;
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Event listener
chatbotForm.addEventListener('submit', sendMessage);

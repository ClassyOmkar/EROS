document.querySelector('.send-button').addEventListener('click', () => {
    const input = document.querySelector('.message-input');
    const message = input.value.trim();

    if (message) {
        sendMessage(message);
        input.value = '';
    }
});

document.querySelector('.message-input').addEventListener('input', () => {
    const input = document.querySelector('.message-input');
    const message = input.value.trim();

    if (message) {
        startTypingAnimation();
    } else {
        stopTypingAnimation();
    }
});

function sendMessage(message) {
    const chatBody = document.querySelector('.chat-body');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    
    const contentElement = document.createElement('span');
    contentElement.classList.add('message-content');
    contentElement.textContent = message;

    const timestampElement = document.createElement('span');
    timestampElement.classList.add('timestamp');
    const now = new Date();
    timestampElement.textContent = `${now.getHours()}:${now.getMinutes()}`;

    messageElement.appendChild(contentElement);
    messageElement.appendChild(timestampElement);
    chatBody.appendChild(messageElement);

    chatBody.scrollTop = chatBody.scrollHeight;
}

function startTypingAnimation() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    
    // Get the background color of the last received message
    const lastReceivedMessage = document.querySelector('.message.received:last-child');
    const lastMessageColor = window.getComputedStyle(lastReceivedMessage).getPropertyValue('background-color');
    
    // Set the background color of the typing indicator
    typingIndicator.style.backgroundColor = lastMessageColor;
    
    typingIndicator.textContent = '...';
    const chatBody = document.querySelector('.chat-body');
    chatBody.appendChild(typingIndicator);
}

function stopTypingAnimation() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}


  
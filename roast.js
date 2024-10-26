const insults = [
    "I'd roast you, but it seems life beat me to it!",
    "Are you always this amusing, or did you take extra funny pills today?",
    "You’re like a cloud…when you disappear, the day gets brighter!",
    "You’re not bad, you’re just…unique.",
    "It’s not that you’re unlucky; you’re just ‘character-building’!",
    "I’m not saying you’re clumsy, but gravity seems to like you a lot.",
    "Talking to you makes me feel so smart!",
    "I'd say you're one of a kind, but that would be an understatement.",
    "Is that your real personality, or did you just download a free trial?",
    "When it comes to style, you're truly in a league of your own!",
    "Did you know that being unusual is actually in this year?",
    "You’re a special kind of friend — the kind they make manuals for!",
    "If sarcasm was an Olympic sport, you’d probably win the gold!",
    "Some people bring joy wherever they go. You bring joy whenever you leave the room for snacks!",
    "You’re unique, just like everyone else!",
    "Remember, normal is boring. Thankfully, you’re far from it!",
    "You have the kind of personality that a pet rock would look up to.",
    "They say laughter is the best medicine. Good thing you’re here!",
    "You have the uncanny ability to make my day...interesting.",
    "If being different was a superpower, you'd be a superhero!",
    "You know, it takes a special kind of charm to stand out like you do.",
    "You’re like a breath of fresh air…mixed with a bit of mystery!",
    "You’re an unforgettable character – and I mean that in a good way!",
    "Every day with you is like a unique little adventure.",
    "You should be careful, your wit is pretty sharp!",
    "You’re not just any friend; you’re an adventure buddy!",
    "If joy had a face, it would look a lot like yours – after it’s had a coffee!",
    "You’re proof that personality matters more than looks. Way to represent!",
    "In a world full of ordinary, you’re like a rare comic book issue.",
    "You’re like a human version of a meme – everyone loves to share you!",
    "You’re a real gem – a little rough around the edges, but valuable nonetheless.",
    "You’re a trendsetter – in a league of your own.",
    "You’ve got that ‘one-of-a-kind’ vibe, like a limited edition.",
    "Let’s just say the world is lucky to have someone as entertaining as you!"
];

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userText = userInput.value; // Get user input
    if (userText.trim() !== "") { // Check if input is not empty
        // Display user message in chat box
        chatBox.innerHTML += `<p class="user">User: ${userText}</p>`;
        userInput.value = ""; // Clear input field
        
        // Randomly choose an insult and display it
        const chosen = Math.floor(Math.random() * insults.length);
        chatBox.innerHTML += `<p class="bot">Computer: ${insults[chosen]}</p>`;
        
        // Scroll to the bottom of chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Optional: Allow pressing "Enter" to send message
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

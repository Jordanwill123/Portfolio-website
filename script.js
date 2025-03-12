var botui = new BotUI('botui-app');

botui.message.add({
    content: 'Hello! How can I help you today?'
}).then(function() {
    return botui.action.text({
        action: {
            placeholder: 'Ask me about my skills, experience, or projects!'
        }
    });
}).then(function(res) {
    botui.message.add({
        content: 'You asked about: ' + res.value
    });
});

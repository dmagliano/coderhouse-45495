const socket = io();
let user;
let chatbox = document.getElementById('chatbox');

Swal.fire({
    title: 'Identificar',
    input: 'text',
    text: 'Digite o nome do usuário para se identificar no chat',
    inputValidator: (value) => {
        return !value && 'Você precisa digitar um nome para se identificar no chat!'
    },
    allowOutsideClick: false,
}).then((result) => {
    user = result.value;
    socket.emit('message', { user: user, message: 'entrou no chat' });
    socket.broadcast.emit('messageLogs', messages);
});

chatbox.addEventListener('keyup', (event) => {
    console.log('keyup', event.key);
    if (event.key === "Enter") {
        if (chatbox.value.trim().length > 0) {
            socket.emit('message', { user: user, message: chatbox.value });
            chatbox.value = '';
        }
    }
});

socket.on('messageLogs', data => {
    let log = document.getElementById('messageLogs');
    let messages = "";
    data.forEach(message => {
        messages = messages + `<p><strong>${message.user}</strong>: ${message.message}</p>`
    });
    log.innerHTML = messages;
});
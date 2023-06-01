const fs = require('fs');
const crypto = require('crypto');

const filePath = './usuarios.json';

//função para encriptar a senha do usuario
function encrypSenha(senha) {
  const cipher = crypto.createCipher('aes192', 'encryptionKey');
  let encryptedSenha = cipher.update(senha, 'utf8', 'hex');
  encryptedSenha += cipher.final('hex');
  return encryptedSenha;
}

//função para decriptar a senha do usuario
function decryptSenha(senhaEncriptada) {
  const decipher = crypto.createDecipher('aes192', 'encryptionKey');
  let decryptedSenha = decipher.update(senhaEncriptada, 'hex', 'utf8');
  decryptedSenha += decipher.final('utf8');
  return decryptedSenha;
}

//função para salvar o usuario
function salvaUsuario(username, senha) {
  // Load existing users (if any)
  let listaUsuarios = [];
  if (fs.existsSync(filePath)) {
    const arquivoUsuarios = fs.readFileSync(filePath, 'utf8');
    listaUsuarios = JSON.parse(arquivoUsuarios);
  }

  //função para conferir se um usuario existe
  const usuarioExiste = listaUsuarios.find(user => user.username === username);
  if (usuarioExiste) {
    console.log('Erro, usuario já cadastrado');
    return;
  }

  //encriptar o password do usuario
  const encryptedSenha = encrypSenha(senha);

  //adiciona o novo usuario ao array de usuarios
  const novoUsuario = { username, senha: encryptedSenha };
  listaUsuarios.push(novoUsuario);

  // Save the updated users array to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(listaUsuarios));

  console.log('Usuario salvo com sucesso!');
}

// Function to validate a user
function validarUsuario(username, senha) {
  // Load existing users (if any)
  let usuarios = [];
  if (fs.existsSync(filePath)) {
    const arquivoUsuarios = fs.readFileSync(filePath, 'utf8');
    usuarios = JSON.parse(arquivoUsuarios);
  }

  // Find the user with the matching username
  const usuario = usuarios.find(usuario => usuario.username === username);
  if (!usuario) {
    return 'Erro usuario não existe';
  }

  // Decrypt the stored password and check if it matches the input password
  const senhaSalva = decryptSenha(usuario.password);
  if (senhaSalva === senha) {
    return 'Logado com sucesso';
  }

  return 'Erro: senha incorreta';
}

// Usage example
salvaUsuario('diogo', 'senha12345');
console.log(validarUsuario('diogo', 'senha12345'));
console.log(validarUsuario('diogo', 'senhaerrada'));
const { Usuarios } = require("./usuarios.js");

class ManageUsers {
  constructor() {
    this.usuarios = new Usuarios('Users.json');
  }

  async novoUsuario(nome, sobrenome, idade, curso) {
    const user = { nome: nome, sobrenome: sobrenome, idade: idade, curso: curso };
    await this.usuarios.criarUsuario(user);
  }

  async listaUsuarios() {
    try {
      const listaUsuarios = await this.usuarios.lerArquivoUsuarios();
      console.log('Usuarios:', JSON.stringify(listaUsuarios));
      return listaUsuarios;
    } catch (error) {
      console.error('Erro lendo arquivo de usuarios:', error);
      return [];
    }
  }
}
const manageUsers = new ManageUsers();
manageUsers.novoUsuario('Diogo', 'Magliano', 37, 'Backend');
manageUsers.listaUsuarios();

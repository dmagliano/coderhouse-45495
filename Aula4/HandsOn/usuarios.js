const fs = require('fs').promises;

class Usuarios {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async criarUsuario(novoUsuario) {
    try {
      const listaUsuarios = await this.lerArquivoUsuarios();
      listaUsuarios.push(novoUsuario);
      await this.salvaListaUsuarios(listaUsuarios);
      console.log('Usuario criado com sucesso: ' + JSON.stringify(novoUsuario.nome));
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  async lerArquivoUsuarios() {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      }
      throw error;
    }
  }

  async salvaListaUsuarios(users) {
    try {
      await fs.writeFile(this.filePath, JSON.stringify(users));
    } catch (error) {
      console.error('Error salvando usuarios:', error);
    }
  }
}

exports.Usuarios = Usuarios;


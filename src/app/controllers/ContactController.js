const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll()

    response.json(contacts)
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();

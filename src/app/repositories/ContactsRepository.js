const { uuid } = require('uuidv4')

const contacts = [
  {
    id: uuid(),
    name: 'João',
    email: 'joao.alves@gmail.com',
    phone: '(11)092345832',
    category_id: uuid(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {resolve(contacts)});
  }
}

module.exports = new ContactsRepository();

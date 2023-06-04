const { v4 } = require("uuid")

let contacts = [
  {
    id: v4(),
    name: "João",
    email: "joao.alves@gmail.com",
    phone: "(11)092345832",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Luiz",
    email: "luiz.alves@gmail.com",
    phone: "(11)439425",
    category_id: v4(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {resolve(contacts)});
  }
  findById(id) {
    return new Promise((resolve) => {
      {resolve(contacts.find((contact) => contact.id === id))}
    });
  }
  findByEmail(email) {
    return new Promise((resolve) => {
      {resolve(contacts.find((contact) => contact.email === email))}
    });
  }
  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      {resolve()}
    });
  }
  create({name, email, phone, category_id}) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      {resolve(newContact)}
    });
  }
  update(id, {name, email, phone, category_id}) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => {
        return contact.id === id ? updateContact : contact;
      })
      {resolve(updateContact)}
    });
  }
}

module.exports = new ContactsRepository();

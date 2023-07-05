const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(req, res) {
    const { orderBy } = req.query;
    const contacts = await ContactsRepository.findAll(orderBy);

    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({error: "User not found"});
    }

    res.json(contact);
  }

  async store(req, res) {
    const { name, email, phone, category_id } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const ContactExists = await ContactsRepository.findByEmail(email);

    if (ContactExists) {
      return res.status(400).json({ error: "This e-mail is already in use" });
    }

    const contact = await ContactsRepository.create({name, email, phone, category_id});
    res.json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, category_id } = req.body;

    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return res.status(404).json({error: "User not found"});
    }

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const ContactExists = await ContactsRepository.findByEmail(email);
    if (ContactExists && ContactExists.id !== id) {
      return res.status(400).json({ error: "This e-mail is already in use" });
    }

    const contactUser = await ContactsRepository.update(id, {name, email, phone, category_id});
    res.json(contactUser);
  }

  async delete(req, res) {
    const { id } = req.params;

    ContactsRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new ContactController();

const CategoriesRepository = require("../repositories/CategoriesRepository");

class CategoriesController {
  async index(req, res) {
    const categories = await CategoriesRepository.findAll();

    res.json(categories);
  }

  async store(req, res){
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const categorie = await CategoriesRepository.create({name});
    res.json(categorie);
  }
}

module.exports = new CategoriesController();

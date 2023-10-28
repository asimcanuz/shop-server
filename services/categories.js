class CategoryService {
  constructor(Category) {
    this.category = Category;
  }

  //implements sub category
  async get() {
    try {
      return await this.category.findAll();
    } catch {
      throw new Error(err);
    }
  }

  async create(categoryDto) {
    try {
      await this.category.create(categoryDto);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = CategoryService;

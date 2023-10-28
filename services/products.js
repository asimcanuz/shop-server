class ProductService {
  constructor(Product) {
    this.product = Product;
  }

  async get() {
    try {
      return await this.product.findAll();
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(productDto) {
    const { name, code, description, unitPrice, category_id } = productDto;
    const product = await this.product.create({
      name,
      code,
      description,
      unitPrice,
      category_id,
    });
    console.log(product);
  }
}

module.exports = ProductService;

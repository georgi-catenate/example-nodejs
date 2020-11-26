/* eslint-disable no-unused-vars */
const createProduct = (
    repository,
) => async (productToCreate) => {
    const createdProduct = await repository.create(productToCreate);
    console.log(`Product created with id - ${createdProduct.id}`);
    return createdProduct;
};

const updateProduct = (
    repository,
) => async (productId, productToUpdate) => {
    // TODO: Implement
};

const findAllProducts = (
    repository,
) => async () => {
    const products = await repository.findAll();
    return products;
};

const instantiateProductService = (configurations, repository) => ({
    create: createProduct(repository),
    update: updateProduct(repository),
    findAll: findAllProducts(repository),
});

module.exports = instantiateProductService;

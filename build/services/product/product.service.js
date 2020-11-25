"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instantiateProductService = exports.getAllProducts = exports.updateProduct = exports.createProduct = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const product_1 = require("../../db/entities/product");
const createProduct = (repository) => (productToCreate) => __awaiter(void 0, void 0, void 0, function* () {
    let createdProduct;
    try {
        createdProduct = yield repository.save(productToCreate);
        console.log(`Product created with id - ${createdProduct.id}`);
        return createdProduct;
    }
    catch (err) {
        console.log(err);
        throw new Error(err);
    }
});
exports.createProduct = createProduct;
const updateProduct = (repository) => (productId, productToUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Implement
    const product = new product_1.Product();
    return new Promise((resolve) => resolve(product));
});
exports.updateProduct = updateProduct;
const getAllProducts = (repository) => () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield repository.getAll();
    return products;
});
exports.getAllProducts = getAllProducts;
const instantiateProductService = (configurations, repository) => ({
    create: exports.createProduct(repository),
    update: exports.updateProduct(repository),
    getAll: exports.getAllProducts(repository),
});
exports.instantiateProductService = instantiateProductService;
//# sourceMappingURL=product.service.js.map
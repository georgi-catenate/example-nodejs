"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateDbRepositories = void 0;
const typeorm_1 = require("typeorm");
const product_repository_1 = require("./product.repository");
const initiateDbRepositories = () => ({
    products: typeorm_1.getCustomRepository(product_repository_1.ProductRepository),
});
exports.initiateDbRepositories = initiateDbRepositories;
//# sourceMappingURL=index.js.map
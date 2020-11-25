"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeServices = void 0;
const product_service_1 = require("./product/product.service");
const initializeServices = (configurations, repositories) => ({
    productService: product_service_1.instantiateProductService(configurations, repositories.products),
});
exports.initializeServices = initializeServices;
//# sourceMappingURL=index.js.map
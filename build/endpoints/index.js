"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootRouter = void 0;
const express_1 = require("express");
const product_router_1 = require("./product/product.router");
const getRootRouter = (services) => {
    const router = express_1.Router({ mergeParams: true });
    router.use('/products', product_router_1.getProductRouter(services));
    return router;
};
exports.getRootRouter = getRootRouter;
//# sourceMappingURL=index.js.map
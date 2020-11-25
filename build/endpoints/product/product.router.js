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
exports.getProductRouter = void 0;
const express_1 = require("express");
const getProductRouter = (services) => {
    const router = express_1.Router({ mergeParams: true });
    router.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield services.productService.getAll();
            response.json(products);
        }
        catch (error) {
            throw new Error(error);
        }
    }));
    router.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const productToCreate = request.body;
        const createdProduct = yield services.productService.create(productToCreate);
        response.json(createdProduct);
    }));
    return router;
};
exports.getProductRouter = getProductRouter;
//# sourceMappingURL=product.router.js.map
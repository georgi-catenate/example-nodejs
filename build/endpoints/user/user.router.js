"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRouter = void 0;
const express_1 = require("express");
const getUserRouter = () => {
    const router = express_1.Router({ mergeParams: true });
    router.get('/', (request, response) => {
        response.send('hello');
    });
    return router;
};
exports.getUserRouter = getUserRouter;
//# sourceMappingURL=user.router.js.map
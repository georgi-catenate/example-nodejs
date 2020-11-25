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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const endpoints_1 = require("./endpoints");
const ormconfig_1 = __importDefault(require("./ormconfig"));
const connection_1 = require("./db/connection");
const repositories_1 = require("./repositories");
const services_1 = require("./services");
const app = express_1.default();
// eslint-disable-next-line no-unused-vars
const startServer = (configurations) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.getDbConnection(ormconfig_1.default);
    const repositories = repositories_1.initiateDbRepositories();
    const services = services_1.initializeServices(configurations, repositories);
    const application = app
        .use(express_1.default.urlencoded({ extended: true }))
        .use(express_1.default.json({ limit: '100mb' }))
        .use(cors_1.default())
        .use('/', endpoints_1.getRootRouter(services));
    return application;
});
exports.startServer = startServer;
//# sourceMappingURL=server.js.map
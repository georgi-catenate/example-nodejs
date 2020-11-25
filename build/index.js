"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const configurations_1 = require("./configurations");
const server_1 = require("./server");
const configuration = configurations_1.getConfiguration(process.env);
server_1.startServer(configuration)
    .then((application) => {
    const { SERVER_PORT } = configuration;
    application.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
    console.log('Server successfully started');
})
    .catch((error) => {
    console.error('Server failed on startup', error);
});
//# sourceMappingURL=index.js.map
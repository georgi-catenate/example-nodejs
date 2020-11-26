const getConfiguration = require('./configurations');
const startServer = require('./server');

const configuration = getConfiguration(process.env);

startServer(configuration)
    .then((application) => {
        const { SERVER_PORT } = configuration;
        application.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));

        console.log('Server successfully started');
    })
    .catch((error) => {
        console.error('Server failed on startup', error);
    });

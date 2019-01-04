const BlitzLCUConnector = require('@solomid/blitz-lcu-connector');

let lcuConnector = new BlitzLCUConnector();

lcuConnector.on('ready', () => {
    console.log('Ready fired');
});

lcuConnector.start();

lcuConnector.on('error', (err) => {
    console.log('Error ' + err);
});

lcuConnector.on('sessionUpdate', data => {
    console.log('Session Update ' + data);
});

setInterval(async () => {
    try {
        let path = await lcuConnector.getInstallPath();
        console.log('League path' + path);

        let sessionInfo = await lcuConnector.getSessionInfo();
        console.log('Session Info ' + JSON.stringify(sessionInfo));
    } catch (err) {
        console.error('Error ' + err);
    }
}, 1000);
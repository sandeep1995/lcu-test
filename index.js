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

lcuConnector.on('reset', () => {
    console.log('Reset fired');
});
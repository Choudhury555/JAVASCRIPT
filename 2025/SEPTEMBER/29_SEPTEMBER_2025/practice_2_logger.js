// Write a CJS logger.js and use it with require.
function logInfo(msg) {
    console.log("INFO:", msg);
}

function logError(msg) {
    console.log("ERROR:", msg);
}

module.exports = { logInfo, logError };
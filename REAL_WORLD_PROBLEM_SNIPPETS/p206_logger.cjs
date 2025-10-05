// Logger with CommonJS (Node.js style)
function logInfo(msg) {
    console.log("ℹ️", msg);
}

function logError(msg) {
    console.error("❌", msg);
}

module.exports = { logInfo, logError };
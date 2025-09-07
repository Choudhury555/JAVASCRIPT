// Partial application for logging utility
function log(level, message) {
    console.log(`[${level.toUpperCase()}] ${message}`);
}

const info = log.bind(null, "info");
const warn = log.bind(null, "warn");

info("Server started");//[INFO] Server started
warn("Low memory!");//[WARN] Low memory!
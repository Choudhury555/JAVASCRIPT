// Practice
// Use partial application to pre-fill a logging function with a log level (info, warn, error).
function log(level, message) {
    console.log(`[${level}] ${message}`);
}

const info = log.bind(null, "INFO")
const warn = log.bind(null, "WARN")
const error = log.bind(null, "ERROR")

info("System running");//[INFO] System running
warn("Low disk space");//[WARN] Low disk space
error("App crashed!");//[ERROR] App crashed!
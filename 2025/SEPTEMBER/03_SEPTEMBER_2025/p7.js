//Prcatice
//Create a reusable logger function using bind for partial arguments.
function log(level, message) {
    console.log(`[${level}] ${message}`);
}

const info = log.bind(null, "INFO");
const error = log.bind(null, "ERROR");

info("Server started");//[INFO] Server started
error("Something broke");//[ERROR] Something broke
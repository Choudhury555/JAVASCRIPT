// Handle invalid JSON with try/catch

const badJSON = '{"name":"Abhi", "age":}'; // Invalid JSON

try {
    const data = JSON.parse(badJSON);
    console.log(data);
} catch (error) {
    console.error(error.message);//Unexpected token '}', ..."i", "age":}" is not valid JSON
}
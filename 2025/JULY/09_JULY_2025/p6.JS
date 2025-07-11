// Use try/catch to handle a failing JSON parse.

const badJSON = '{"name":"Abhi","age":}';

try {
    const data = JSON.parse(badJSON);
    console.log(data.age);
} catch (error) {
    console.error("Failed to parse JSON:",error.message);
}
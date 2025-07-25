// Parse JSON safely with error handling

const invalidJson = '{"name": "Abhi", age: }'; // Invalid!

try {
    const parsed = JSON.parse(invalidJson);
    console.log(parsed);
} catch (error) {
    console.error(error.message);
}
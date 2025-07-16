// Always run cleanup with finally

try {
    console.log("Processing...");
    throw new Error("Something went wrong")
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleanup complete (finally block ran)");
}
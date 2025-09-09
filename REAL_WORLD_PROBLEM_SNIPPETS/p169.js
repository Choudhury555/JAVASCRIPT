// Write an immutable function to update a todo list without changing original.
const todos = [
    { id: 1, task: "Learn JS", done: false },
    { id: 2, task: "Practice DSA", done: false }
]

// ✅ Immutable update
const updatedTodos = todos.map(todo => todo.id === 1 ? { ...todo, done: true } : todo);

console.log(todos);
console.log(updatedTodos);
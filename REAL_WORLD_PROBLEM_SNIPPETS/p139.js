// Generator for a simple quiz flow
// Passing values into generators

function* quizGen() {
    let answer1 = yield "Q1: What is 2 + 2?";
    console.log("Your Answer:", answer1);

    let answer2 = yield "Q2: Capital of India?";
    console.log("Your Answer:", answer2);

    yield "✅ Quiz Completed!";
}

const quiz = quizGen();
console.log(quiz);//Object [Generator] {}

console.log(quiz.next().value);
console.log(quiz.next(4).value);
console.log(quiz.next("Delhi").value);

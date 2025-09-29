async function loadMath() {
    const math = await import("./math_1.js");
    console.log(math);
    console.log(math.add(4, 50));//54
}

loadMath();
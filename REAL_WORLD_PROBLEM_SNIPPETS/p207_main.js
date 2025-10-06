async function loadMath() {
    const math = await import("./p207_math.js");
    console.log("2 + 3 =", math.add(2, 3));//2 + 3 = 5
    console.log("4 * 5 =", math.multiply(4, 5));//4 * 5 = 20
}

loadMath();
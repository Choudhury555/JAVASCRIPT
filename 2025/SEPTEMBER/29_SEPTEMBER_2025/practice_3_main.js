async function run() {
    // Dynamically import math.js when needed
    const math = await import("./practice_3_math.js");
    // console.log(math);
    console.log("Dynamic import loaded!");
    console.log("2 + 3 =", math.add(2, 3));//2 + 3 = 5
    console.log("4 * 5 =", math.multiply(4, 5));//4 * 5 = 20
}

run();
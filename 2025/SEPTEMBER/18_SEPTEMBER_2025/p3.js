// Static Fields & Methods
class MathUtil {
    static PI = 3.14159;

    static circleArea(r) {
        return MathUtil.PI * r * r;
    }
}

console.log(MathUtil.circleArea(5));//78.53975
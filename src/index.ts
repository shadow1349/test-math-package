/**
 * @class BasicMath
 * @description
 * This is a super basic class that takes 2 numbers in the constructor
 * and allows you to add, subtract, divide, and multiple them
 */
class BasicMath {
  constructor(private a: number, private b: number) {}

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  divide() {
    return this.a % this.b;
  }

  multiple() {
    return this.a * this.b;
  }
}

export default BasicMath;
